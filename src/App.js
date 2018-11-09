import React, { Component } from 'react'
import './App.css'
import { authenticate } from './helpers/authenticate'
import { parseJwt } from './helpers/parseJwt'
import RenderInterface from './components/commmon/RenderInterface/RenderInterface'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AdminAuth from './components/admin/AdminAuth/AdminAuth'
import InvestorAuth from './components/investor/InvestorAuth/InvestorAuth'

class App extends Component {
  componentDidMount() {
    window.location.hash.length > 30 && authenticate(window.location.hash)
  }
  render() {
    const userInfo = parseJwt(localStorage.getItem('token'))
    return (
      <div>
        {/* <RenderInterface userinfo={userInfo} /> */}
        <HashRouter>
          <Switch>
            <Route path="/admin-login" component={AdminAuth} />
            <Route path="/" exact component={InvestorAuth} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App
