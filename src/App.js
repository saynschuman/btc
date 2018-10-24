import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";

class App extends Component {
  renderInterface = () => {
    if (localStorage.getItem("user") !== null) {
      switch (localStorage.getItem("user")) {
        case "admin":
          return <RootAdmin />;
        case "investor":
          return <InvestorHomepage />;
        default:
          return (
            <div>
              <LoginHeader />
              <AuthForm />
            </div>
          );
      }
    } else {
      switch (this.props.whoIsLogged) {
        case "admin":
          return <RootAdmin />;
        case "investor":
          return <InvestorHomepage />;
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

export default connect(state => {
  return {
    whoIsLogged: state.authData.whoIsLogged
  };
})(App);
