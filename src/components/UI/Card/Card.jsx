import React from 'react'
import Arrowlong from '../Arrowlong/Arrowlong'
import css from './Card.module.sass'
import { motion } from "framer-motion";

const Card = ({title, parag, svg, id}) => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div 
      className={css.wrap}>
      <motion.div
        className={css.box}
        initial={{ bottom: "2rem" }}
        whileInView={{ bottom: "0rem" }}
        transition={transition}
        >
      <div 
      className={`
        ${id === 1 && css.icon1}
        ${id === 2 && css.icon2}
        ${id === 3 && css.icon3}
      `}>{svg}</div>
      </motion.div>
      <p>{title}</p>
      <p>{parag}</p>
      <Arrowlong/>
    </div>
  )
}

export default Card