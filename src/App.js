import React, { Component } from 'react'
import './App.css'
// import { authenticate } from './helpers/authenticate'
import AdminAuth from '../../components/admin/AdminAuth/AdminAuth'
import InvestorAuth from '../../components/investor/InvestorAuth/InvestorAuth'
import { Router, Link } from '@reach/router'
import { parseJwt } from './helpers/parseJwt'
import RenderInterface from './components/commmon/RenderInterface/RenderInterface'

class App extends Component {
  // componentDidMount() {
  //   window.location.hash.length > 30 && authenticate(window.location.hash)
  // }
  render() {
    const userInfo = parseJwt(localStorage.getItem('token'))
    // return <div>{<RenderInterface userinfo={userInfo} />}</div>
    return (
      <Router>
        <AdminAuth path="/admin-login">
          <AdminHomepage exact path="/" />
          <AdminSettings path="/settings" />
          <AdminReports path="/reports" />
          <AdminPays path="/pays" />
          <Applications path="/applications" />
          <AdminSchema path="/schema" />
          <AdminOther path="/other" />
          <News path="/news" />
          <AdminHomepage path="/homepage" />
          <AdminHomepage default />
        </AdminAuth>
        <Login path="/login">
          <InvestorHomePage exact path="/investor-home" />
          <InvestorSettings path="/investor-buy" />
          <InvestorPrivateSettings path="/investor-settings" />
          <InvestorHomePage default />
        </Login>
      </Router>
    )
  }
}

export default App
