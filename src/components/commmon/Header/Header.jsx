import React, { Component } from 'react'
import './Header.scss'
import Nav from './components/Nav'
import AdminHeader from './components/AdminHeader'
import PropTypes from 'prop-types'
class Header extends Component {
  static propTypes = {
    whoAreYou: PropTypes.string
  }
  exit = e => {
    e.preventDefault()
    localStorage.clear()
    window.location.href = '/'
  }
  render() {
    const renderStyle = () => {
      if (this.props.whoAreYou === 'admin') {
        return {
          widthLeft: '25%',
          widthRight: '15%',
          widthMiddle: '60%'
        }
      } else {
        return {
          widthLeft: '25%',
          widthRight: '25%',
          widthMiddle: '50%'
        }
      }
    }
    return (
      <div className="header-wrapper">
        <div className="header-inner">
          <div className="left item" style={{ width: renderStyle().widthLeft }}>
            <div className="logo" />
          </div>
          <div className="item menu" style={{ width: renderStyle().widthMiddle }}>
            {this.props.whoAreYou === 'admin' ? <AdminHeader /> : <Nav />}
          </div>
          <div className="right item" style={{ width: renderStyle().widthRight }}>
            <ul>
              {this.props.whoAreYou !== 'admin' && (
                <li className="lang">
                  <a href="/">RU</a>
                </li>
              )}
              {this.props.whoAreYou === 'admin' ? (
                <li className="exit admin">
                  <a onClick={this.exit} href="/">
                    Выход
                  </a>
                </li>
              ) : (
                <li className="exit">
                  <a onClick={this.exit} href="/">
                    Выход
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
