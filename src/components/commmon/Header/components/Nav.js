import React from "react";

class Nav extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Nav;
