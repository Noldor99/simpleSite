import React from 'react'
import {worksData} from '../../assets/data/worksData'
import CardWork from './CardWork'
import css from './CardWorkList.module.sass' 

const CardWorkList = () => {
  return (
    <div  className= {css.wrap}>
      <p>How it works</p>
      <div className={css.card}>
        {worksData.map((item)=>(
          <CardWork 
            key = {item.id}
            svg = {item.svg}
            title = {item.title}
            parag = {item.parag}
          />
        ))}
      </div>
    </div>
  )
}

export default CardWorkList    