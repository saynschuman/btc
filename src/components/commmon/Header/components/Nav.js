import React from 'react'
import css from './Nav.module.css'
import { NavLink, HashRouter } from 'react-router-dom'

const Nav = props => {
  // render() {
  return (
    <nav>
      <HashRouter>
        <ul>
          <li>
            <NavLink exact={true} activeClassName={css.isActiveNavLink} to="/investor-home">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName={css.isActiveNavLink} to="/investor-buy">
              Покупка-продажа
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} activeClassName={css.isActiveNavLink} to="/investor-settings">
              Настройки
            </NavLink>
          </li>
        </ul>
      </HashRouter>
    </nav>
  )
  // }
}

export default Nav
