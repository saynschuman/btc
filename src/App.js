import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import RootAdmin from './components/admin/RootAdmin'
// // import InvestorHomepage from "./components/investor/investorHomepage/investorHomePage";
import WrongData from './components/commmon/WrongData/WrongData'
import { getHomePageAdminData, getCourse, getCourseHistory } from './actions'
import { authenticate } from './helpers/authenticate'
import { parseJwt } from './helpers/parseJwt'
import RenderInterface from './components/commmon/RenderInterface/RenderInterface'
import { Route, Switch, HashRouter } from 'react-router-dom'
import AdminAuth from './components/admin/AdminAuth/AdminAuth'

class App extends Component {
  componentDidMount() {
    authenticate(window.location.hash)
    this.props.getHomePageAdminData()
    this.props.getCourse()
    this.props.getCourseHistory()
  }
  renderInterface = () => {
    switch (localStorage.getItem('token')) {
    }
  }

  //   if (localStorage.getItem("user") !== null) {
  //     switch (localStorage.getItem("user")) {
  //       case "admin":
  //         return <RootAdmin />;
  //       // case "investor":
  //       //   return <InvestorHomepage />;
  //       default:
  //         return (
  //           <div>
  //             <LoginHeader />
  //             <AuthForm />
  //             <WrongData />
  //           </div>
  //         );
  //     }
  //   } else {
  //     switch (this.props.whoIsLogged) {
  //       case "admin":
  //         return <RootAdmin />;
  //       // case "investor":
  //       //   return <InvestorHomepage />;
  //       default:
  //         return (
  //           <div>
  //             <LoginHeader />
  //             <AuthForm />
  //           </div>
  //         );
  //     }
  //   }
  // };
  render() {
    const userInfo = parseJwt(localStorage.getItem('token'))
    const { isLoaded, isLoading, success } = this.props
    return (
      <div>
        {this.props.isError ? (
          <div>
            {isLoading && !isLoaded && 'Loading'}
            {isLoaded && (
              <div>
                'login investor'
                {success !== null && <WrongData success={success} />}
              </div>
            )}
          </div>
        ) : isLoading && !isLoaded ? (
          'Loading'
        ) : (
          <RenderInterface userinfo={userInfo} />
        )}
        <HashRouter>
          <div>
            <Switch>
              <Route path="/admin-login" component={AdminAuth} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      isError: state.adminHomePageData.isError,
      isLoading: state.adminHomePageData.isLoading,
      isLoaded: state.adminHomePageData.isLoaded,
      success: state.authData.success
    }
  },
  { getHomePageAdminData, getCourse, getCourseHistory }
)(App)
