import React, { Component } from "react";
import Settings from "./components/Settiings/Settings";
import Header from "./components/commmon/Header/Header";
import "./App.css";
import PropTypes from "prop-types";
import { auth } from "./mocks";
import AsideMenu from "./components/commmon/AsideMenu/AsideMenu";

class App extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  };
  render() {
    return (
      <div>
        <Header isAdmin={auth.isAdmin} />
        <AsideMenu />
        <Settings />
      </div>
    );
  }
}

export default App;
