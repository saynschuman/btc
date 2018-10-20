import React, { Component } from "react";
import Header from "./components/commmon/Header/Header";
import "./App.css";
import PropTypes from "prop-types";
import { auth } from "./mocks";
import AsideMenu from "./components/commmon/AsideMenu/AsideMenu";
import EditAgriment from "./components/commmon/EditAgriement/EditAgriement";

class App extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  };
  render() {
    return (
      <div>
        <Header isAdmin={auth.isAdmin} />
        <AsideMenu />
        <EditAgriment />
      </div>
    );
  }
}

export default App;
