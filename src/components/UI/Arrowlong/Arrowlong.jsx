import React, { useState } from 'react'
import css from './Arrowlong.module.sass'
const Arrowlong = () => {

  const[direction, useDirection] = useState('right')

  return (
    <div className={css.wrap}>
      <p>Learn more</p>
      <i className={`
        ${css.arrow}  
        ${direction === 'left' && css.left}
        ${direction === 'right' && css.right}
        `}></i>
    </div>
  )
}

export default Arrowlong