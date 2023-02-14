import React from 'react'
import Card from '../UI/Card/Card'
import css from './Castomers.module.sass'
import { CardsData } from '../../assets/data/CardsData'
import Svg0Dotten from '../../assets/Border/Svg0Dotten'
import Svg0Rectangle_1 from '../../assets/Border/Svg0Rectangle_1'
import Svg0Rectangle_2 from '../../assets/Border/Svg0Rectangle_2'
const Castomers = () => {
  return (
    <div className={css.wrap} id='castomers'>
      <div className={css.container}>
        <div className={css.right}>
          <p>What we do to help our customers in digital era.</p>
          <div className={css.card1}>
            <Card 
              key = {CardsData[1].id}
              id = {CardsData[1].id}
              title = {CardsData[1].title}
              parag = {CardsData[1].parag}
              svg = {CardsData[1].svg}
            />
            <Svg0Dotten className={css.dotten1}/>
          </div>
        </div>
        <div className={css.left}>
          <div className={css.card2}>
            <Card 
              key = {CardsData[0].id}
              id = {CardsData[0].id}
              title = {CardsData[0].title}
              parag = {CardsData[0].parag}
              svg = {CardsData[0].svg}
            />
            <Svg0Dotten className={css.dotten2}/>
          </div>
          <div className={css.card3}>
            <Card 
              key = {CardsData[2].id}
              id = {CardsData[2].id}
              title = {CardsData[2].title}
              parag = {CardsData[2].parag}
              svg = {CardsData[2].svg}
            />
            <Svg0Dotten className={css.dotten3}/>
          </div>
        </div>
      </div>
      <Svg0Rectangle_1 color={'#4A99D3'} className={css.asimptota1}/>
    </div>
  )
}

export default Castomers