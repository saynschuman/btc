import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";
// import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";
import WrongData from "./components/commmon/WrongData/WrongData";

class App extends Component {
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
  // getData = () => {
  //   fetch("https://atc-bl.nadzor.online/bl198765/admin/", {
  //     mode: "cors",
  //     method: "GET",
  //     cache: "no-cache",
  //     headers: {
  //       "Access-Control-Allow-Headers": "Content-Type, *",
  //       "Access-Control-Allow-Credentials": true,
  //       "Access-Control-Allow-Origin": "https://atc-bl.nadzor.online/",
  //       "Access-Control-Allow-Methods": "POST,GET,OPTIONS,PUT,DELETE",
  //       "Content-Type": "application/json",
  //       Authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYmI3NThiOWQwMzM3OWE1NWMxZDUyYiIsInR5cGUiOiJyZWd1bGFyIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTQwODQ2Mzk0LCJleHAiOjE1NDA4NDk5OTR9.3KfHw2bXtbwjwW1TJgxpzX93XplJXCmNVunuk-DfJwA"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };
  render() {
    // this.getData();
    return <div>{this.renderInterface()}</div>;
  }
}

export default connect(state => {
  return {
    whoIsLogged: state.authData.whoIsLogged
  };
})(App);
