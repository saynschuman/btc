import React from 'react'
import RootAdmin from '../../admin/RootAdmin'
import NotLogged from '../../notLogged/notLogged'
export default props => {
  const renderInterface = role => {
    switch (role) {
      case 'admin':
        return <RootAdmin />
      case 'investor':
        return 'investor'
      default:
        return <NotLogged />
    }
  }
  return <div>{renderInterface(props.userinfo.role)}</div>
}
