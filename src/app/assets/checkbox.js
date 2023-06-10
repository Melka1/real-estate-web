'use client'

import React from 'react'
import './styles/checkbox.css'

function Checkbox({title}) {

  return (
    <label id="container">
      <p className="text">{title}</p>
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox

