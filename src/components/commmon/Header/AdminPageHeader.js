import React, { Component } from "react";
import "./AdminPageHeader.scss";
import AdminHeader from "./components/AdminHeader";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../actions";
import classNames from "classnames";
import { Link } from "react-router-dom";

class AdminPageHeader extends Component {
  exit = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="left item">
            <Link to={"/"}>
              <div className="logo" />
            </Link>
          </div>
          <div className="item menu">
            <AdminHeader />
          </div>
          <div className="right item">
            <ul>
              <li className="exit admin">
                <a onClick={this.exit} href="/">
                  Выход
                </a>
              </li>
            </ul>
            <div
              onClick={this.props.toggleMobileMenu}
              className={classNames("mobile-menu-button", {
                openedMenu: this.props.menuIsOpen
              })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      menuIsOpen: state.toggleMobileMenu.mobileMenuIsOpen
    };
  },
  { toggleMobileMenu }
)(AdminPageHeader);
