import React from "react";
import "./AsideMenu.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
// import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../actions";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Aside = props => {
  const exit = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <aside
      className={classNames({ mobileMenuVisible: props.menuIsOpen })}
      // style={{ height: window.innerHeight }}
    >
      {/* <PerfectScrollbar> */}
      <div className="mobile-admin-nav">
        <ul className={"nav-top"}>
          <li>Панель администратора</li>
          <li className={"id-admin"}>ID: 36143324</li>
          <li className="exit admin">
            <a onClick={exit} href="/">
              Выход
            </a>
          </li>
        </ul>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/settings"}>Настройка прав администратора</Link>
        </li>
        <li>
          <Link to={"/reports"}>Отчеты</Link>
        </li>
        <li>
          <a href="/">Выплаты начислений инвесторам</a>
        </li>
        <li>
          <a href="/">Заявки инвесторов на продажу</a>
        </li>
        <li>
          <a href="/">Настройка схемы расчета</a>
        </li>
        <li>
          <a href="/">Прочее</a>
        </li>
        <li>
          <a href="/">Новости</a>
        </li>
      </ul>
      {/* </PerfectScrollbar> */}
    </aside>
  );
};

export default connect(
  state => {
    return {
      menuIsOpen: state.toggleMobileMenu.mobileMenuIsOpen
    };
  },
  { toggleMobileMenu }
)(Aside);
