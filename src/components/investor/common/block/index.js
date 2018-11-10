import React from 'react'
import css from './index.module.css'
import classNames from 'classnames'

export default props => {
  return (
    <div className={css.block}>
      <div className={css.body}>{props.children}</div>
    </div>
  )
}
