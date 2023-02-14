import React from 'react'
import css from './CardWork.module.sass'

const CardWork = ({svg, title, parag}) => {
  return (
    <div className={css.wrap}>
      <div className={css.icon}>
        {svg}
      </div>
      <p className={css.title}>{title}</p>
      <p className={css.parag}>{parag}</p>
    </div>
  )
}

export default CardWork