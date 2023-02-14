import React, { useState } from 'react'
import css from './Arrow.module.css'
const Arrow = ({direct = 'left', ...props}) => {

  const[direction, useDirection] = useState(direct)

  return (
    <div {...props}>
      <i className={`
        ${css.arrow}  
        ${direction === 'left' && css.left}
        ${direction === 'right' && css.right}
        `}></i>
    </div>
  )
}

export default Arrow