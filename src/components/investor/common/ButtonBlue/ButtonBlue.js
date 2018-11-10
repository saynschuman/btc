import React from 'react'
import css from './ButtonBlue.module.css'
export default props => (
  <div className={css.button}>
    {props.text}
    {css.info && <div className={css.info} data-info={'Текс подсказка'} />}
  </div>
)
