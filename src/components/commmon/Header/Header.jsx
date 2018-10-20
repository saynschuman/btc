import React, { Component } from "react";
import "./Header.scss";
import Nav from "./components/Nav";
import AdminHeader from "./components/AdminHeader";
import PropTypes from "prop-types";
class Header extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool
  };
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="left item" style={{ width: "20%" }}>
            <div className="logo" />
          </div>
          <div className="item menu" style={{ width: "65%" }}>
            {this.props.isAdmin ? <AdminHeader /> : <Nav />}
          </div>
          <div className="right item" style={{ width: "15%" }}>
            <ul>
              {!this.props.isAdmin && (
                <li className="lang">
                  <a href="/">RU</a>
                </li>
              )}
              <li className="exit">
                <a href="/">Выход</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
