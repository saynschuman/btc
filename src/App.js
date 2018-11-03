import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
// // import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";
import WrongData from "./components/commmon/WrongData/WrongData";
import { getHomePageAdminData } from "./actions";
import { getAdminsFromServer } from "./backend/api";
import { ADMINS_RESPONSE } from "./constants";

class App extends Component {
  componentDidMount() {
    window.location.pathname.length > 10 &&
      fetch(
        `https://atc-bl.nadzor.online/bl198765/admin/exchange/${window.location.pathname.replace(
          "/",
          ""
        )}`
      )
        .then(res => res.json())
        .then(res => localStorage.setItem("token", res.jwt))
        .then(res => this.props.getHomePageAdminData(res))
        .catch(() => this.props.getHomePageAdminData());

    this.props.getHomePageAdminData();
  }
  renderInterface = () => {
    switch (localStorage.getItem("token")) {
    }
  };
  //   if (localStorage.getItem("user") !== null) {
  //     switch (localStorage.getItem("user")) {
  //       case "admin":
  //         return <RootAdmin />;
  //       // case "investor":
  //       //   return <InvestorHomepage />;
  //       default:
  //         return (
  //           <div>
  //             <LoginHeader />
  //             <AuthForm />
  //             <WrongData />
  //           </div>
  //         );
  //     }
  //   } else {
  //     switch (this.props.whoIsLogged) {
  //       case "admin":
  //         return <RootAdmin />;
  //       // case "investor":
  //       //   return <InvestorHomepage />;
  //       default:
  //         return (
  //           <div>
  //             <LoginHeader />
  //             <AuthForm />
  //           </div>
  //         );
  //     }
  //   }
  // };
  render() {
    const { isLoaded, isLoading, success } = this.props;
    return (
      <div>
        {this.props.isError ? (
          <div>
            {isLoading && !isLoaded && "Loading"}
            {isLoaded && (
              <div>
                <LoginHeader />
                <AuthForm />
                {success !== null && <WrongData success={success} />}
              </div>
            )}
          </div>
        ) : isLoading && !isLoaded ? (
          "Loading"
        ) : (
          <RootAdmin />
        )}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isError: state.adminHomePageData.isError,
      isLoading: state.adminHomePageData.isLoading,
      isLoaded: state.adminHomePageData.isLoaded,
      success: state.authData.success
    };
  },
  { getHomePageAdminData }
)(App);
