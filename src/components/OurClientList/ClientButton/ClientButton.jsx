import React from 'react'
import Arrow from '../../UI/Arrow/Arrow'
import css from './ClientButton.module.sass'

const ClientButton = ({increase, decrease}) => {
  return (
    <div className={css.wrap}>
      <div 
        className={css.left}
        onClick={decrease}
        >
        <Arrow className={css.buttomLeft} direct = 'left'/>
      </div>
      <div 
        className={css.right}
        onClick={increase}
        >
        <Arrow className={css.buttomRight} direct = 'right'/>
      </div>
    </div>
  )
}

export default ClientButton