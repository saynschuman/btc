import React, { Component } from 'react'
import './Header.scss'
import Nav from './components/Nav'
class Header extends Component {
  exit = e => {
    e.preventDefault()
    localStorage.clear()
    window.location.href = '/'
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="left item">
            <div className="logo" />
          </div>
          <div className="item menu">
            <Nav />
          </div>
          <div className="right item">
            <ul>
              <li className="lang">
                <a href="/">RU</a>
              </li>
              <li className="exit">
                <a onClick={this.exit}>Выход</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
