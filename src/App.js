import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import { checkWhoAreYou } from "./actions";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
// import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";
import WrongData from "./components/commmon/WrongData/WrongData";

class App extends Component {
  componentDidMount() {
    this.props.checkWhoAreYou(window.location.pathname.replace("/", ""));
  }
  renderInterface = () => {
    if (localStorage.getItem("user") !== null) {
      switch (localStorage.getItem("user")) {
        case "admin":
          return <RootAdmin />;
        // case "investor":
        //   return <InvestorHomepage />;
        default:
          return (
            <div>
              <LoginHeader />
              <AuthForm />
              <WrongData />
            </div>
          );
      }
    } else {
      switch (this.props.whoIsLogged) {
        case "admin":
          return <RootAdmin />;
        // case "investor":
        //   return <InvestorHomepage />;
        default:
          return (
            <div>
              <LoginHeader />
              <AuthForm />
            </div>
          );
      }
    }
  };
  render() {
    return <div>{this.renderInterface()}</div>;
  }
}

export default connect(
  state => {
    return {
      whoIsLogged: state.authData.whoIsLogged
    };
  },
  { checkWhoAreYou }
)(App);
