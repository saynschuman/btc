import React from "react";
import "./AsideMenu.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../modules/toggleMobileMenu";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const Aside = props => {
  const exit = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <aside className={classNames({ mobileMenuVisible: props.menuIsOpen })}>
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
        <li onClick={props.toggleMobileMenu}>
          <NavLink exact={true} activeClassName="is-active" to="/homepage">
            Главная
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/settings"} activeClassName="is-active">
            Настройка прав администратора
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/reports"} activeClassName="is-active">
            Отчеты
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/pays"} activeClassName="is-active">
            Выплаты начислений инвесторам
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/applications"} activeClassName="is-active">
            Заявки инвесторов на продажу
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/schema"} activeClassName="is-active">
            Настройка схемы расчета
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/other"} activeClassName="is-active">
            Прочее
          </NavLink>
        </li>
        <li onClick={props.toggleMobileMenu}>
          <NavLink to={"/news"} activeClassName="is-active">
            Новости
          </NavLink>
        </li>
      </ul>
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
