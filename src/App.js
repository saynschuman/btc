import React, { Component } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import LoginHeader from "./components/commmon/LoginHeader/LoginHeader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <AuthForm />
      </div>
    );
  }
}

export default App;
