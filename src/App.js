import React, { Component } from 'react'
import './App.css'
import { authenticate } from './helpers/authenticate'
import { parseJwt } from './helpers/parseJwt'
import RenderInterface from './components/commmon/RenderInterface/RenderInterface'

class App extends Component {
  componentDidMount() {
    window.location.hash.length > 30 && authenticate(window.location.hash)
  }
  render() {
    const userInfo = parseJwt(localStorage.getItem('token'))
    return <div>{<RenderInterface userinfo={userInfo} />}</div>
  }
}

export default App
