import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";
import { connect } from "react-redux";
import RootAdmin from "./components/admin/RootAdmin";

class App extends Component {
  render() {
    const { isAdmin } = this.props;
    return (
      <div>
        {isAdmin ? (
          <RootAdmin />
        ) : (
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
    isAdmin: state.authData.isAdmin
  };
})(App);
