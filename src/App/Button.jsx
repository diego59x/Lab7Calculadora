/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import { bool, func, string } from 'prop-types'
import classNames from 'classnames'
import './Button.css'

const Button = ({ active, color, onClick, text }) => (  
  <button 
    className={classNames({
      button: true,
      active,
      [color]: true,
    })}
    type="button" 
    onClick={() => {
        onClick()
    }}
    
  > {text} </button>
)
Button.propTypes = {
    active: bool,
    color: string,
    onClick: func,
}

Button.defaultProps = {
    active: false,
    color: 'default',
    onClick: 'default',
}

export default Button
