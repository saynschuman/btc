import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AdminAuth from '../../components/admin/AdminAuth/AdminAuth'
import InvestorAuth from '../../components/investor/InvestorAuth/InvestorAuth'
import { connect } from 'react-redux'
import WongData from '../../components/commmon/WrongData/WrongData'

const notLogged = props => {
  return (
    <div>
      {props.success !== null && <WongData success={props.success} />}
      <HashRouter>
        <Switch>
          <Route path="/admin-login" component={AdminAuth} />
          <Route path="/" exact component={InvestorAuth} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default connect(state => {
  return {
    success: state.authData.success
  }
})(notLogged)
