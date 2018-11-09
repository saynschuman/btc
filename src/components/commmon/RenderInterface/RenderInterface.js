import React from 'react'
import RootAdmin from '../../admin/RootAdmin'

export default props => {
  const renderInterface = role => {
    switch (role) {
      case 'admin':
        return <RootAdmin />
      case 'investor':
        return 'investor'
      default:
        return 'default'
    }
  }
  return <div>{renderInterface(props.userinfo.role)}</div>
}
