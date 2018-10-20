import React, { Component } from "react";
import Settings from "./components/Settiings/Settings";
import Header from "./components/commmon/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header isAdmin={true} />
        <Settings />
      </div>
    );
  }
}

export default App;
