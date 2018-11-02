import React, { Component } from "react";
// import AuthForm from "./components/AuthForm/AuthForm";
// import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
// // import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";
// import WrongData from "./components/commmon/WrongData/WrongData";
import { getHomePageAdminData } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getHomePageAdminData(window.location.pathname.replace("/", ""));
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
    return (
      <div>
        <RootAdmin />
      </div>
    );
  }
}

export default connect(
  null,
  { getHomePageAdminData }
)(App);
