import React from 'react'
import css from './MobileMenuInvestor.module.css'
import { NavLink } from 'react-router-dom'
import { toggleMobileMenu } from '../../../../modules/toggleMobileMenu'
import { connect } from 'react-redux'

const mobileMenu = props => {
  const exit = e => {
    e.preventDefault()
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
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMobileMenu}
            exact={true}
            activeClassName={css.isActive}
            to="/buy"
          >
            Покупка/Продажа
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={props.toggleMobileMenu}
            exact={true}
            activeClassName={css.isActive}
            to="/settings"
          >
            Настройки
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default connect(
  null,
  {
    toggleMobileMenu
  }
)(mobileMenu)
