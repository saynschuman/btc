import React from "react";
import "./AsideMenu.scss";
import "react-perfect-scrollbar/dist/css/styles.css";
// import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import { toggleMobileMenu } from "../../../actions";
import classNames from "classnames";

const Aside = props => {
  return (
    <aside
      className={classNames({ mobileMenuVisible: props.menuIsOpen })}
      // style={{ height: window.innerHeight }}
    >
      {/* <PerfectScrollbar> */}
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/">Настройка прав администратора</a>
        </li>
        <li>
          <a href="/">Отчеты</a>
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
