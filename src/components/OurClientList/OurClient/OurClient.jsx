import React from 'react'
import Svg4Comma from '../../../assets/OurClients/Svg4Comma'
import ClientButton from '../ClientButton/ClientButton'
import css from './OurClient.module.sass'
import { motion } from "framer-motion";
import Svg0Dotten from '../../../assets/Border/Svg0Dotten';

const OurClient = ({name, parag, image, selected, increase, decrease}) => {

  const transition = { type: "spring", duration: 2};

  return (
    <div className={css.person}>
      <p>What our client say</p>
      <div className={css.wrap}>
        <div className={css.client__left}>
          
          <motion.img
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
            src={image} 
            alt="Person" 
            />
        </div>
        <div className={css.client__right}>
          <Svg4Comma className={css.svg}/>
          <motion.p
            key={selected+10}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={transition}
          >{parag}</motion.p>
          <motion.p
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          >{name}</motion.p>
          <ClientButton
            increase = {increase}
            decrease = {decrease}
          />
        </div>
      </div>
      <Svg0Dotten className = {css.dotten}/>
    </div>
  )
}

export default OurClient