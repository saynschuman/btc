import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="left item">
            <div className="logo" />
          </div>
          <div className="item menu">
            <nav>
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="/">Покупка-продажа</a>
                </li>
                <li className="active">
                  <a href="/">Настройки</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right item">
            <ul>
              <li className="lang">
                <a href="/">RU</a>
              </li>
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
