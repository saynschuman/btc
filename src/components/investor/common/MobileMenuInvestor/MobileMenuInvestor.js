import React from 'react'
import css from './MobileMenuInvestor.module.css'
import { NavLink } from 'react-router-dom'
import { toggleMobileMenu } from '../../../../modules/toggleMobileMenu'
import { connect } from 'react-redux'

const mobileMenu = props => {
  const exit = () => {
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <div className={css.mobileMenu}>
      <ul className={css.menu}>
        <li>
          <NavLink
            onClick={props.toggleMobileMenu}
            exact={true}
            activeClassName={css.isActive}
            to="/investor-home"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMobileMenu}
            exact={true}
            activeClassName={css.isActive}
            to="/investor-buy"
          >
            Покупка/Продажа
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMobileMenu}
            exact={true}
            activeClassName={css.isActive}
            to="/investor-settings"
          >
            Настройки
          </NavLink>
        </li>
      </ul>
      <hr className={css.hr} />
      <div className={css.lang}>
        Язык: <span className={css.langtoggle}>ru</span>
      </div>
      <hr className={css.hr} />
      <div onClick={exit} className={css.exitBtn}>
        Выход
      </div>
    </div>
  )
}

export default connect(
  null,
  {
    toggleMobileMenu
  }
)(mobileMenu)
