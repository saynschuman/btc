import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";

class App extends Component {
  render() {
    const { whoIsLogged } = this.props;
    return (
      <div>
        {whoIsLogged === "admin" && <RootAdmin />}
        {whoIsLogged === "investor" && <InvestorHomepage />}
        {whoIsLogged !== "admin" &&
          whoIsLogged !== "investor" && (
            <div>
              <LoginHeader />
              <AuthForm />
            </div>
          )}
      </div>
    );
  }
}

export default connect(state => {
  return {
    whoIsLogged: state.authData.whoIsLogged
  };
})(App);
