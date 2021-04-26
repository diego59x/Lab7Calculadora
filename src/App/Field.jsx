/* eslint-disable arrow-body-style */
import React, { useState } from 'react'
import { bool, func, string } from 'prop-types'

const Input = ({ active, color, onClick }) => (  
  <input 
    className={classNames({
      button: true,
      active,
      [color]: true,
    })}
    
  />  
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

export default Input
