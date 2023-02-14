import React, { useState } from 'react'
import css from './OurClientList.module.sass'
import { OurClients } from '../../assets/data/OurClients'
import OurClient from './OurClient/OurClient'

const OurClientList = () => {
  const [selected, setSelected] = useState(0);
  const tLength = OurClients.length;

  const increase = () =>{
    selected === tLength - 1
    ? setSelected(0)
    : setSelected((prev) => prev + 1);
    console.log(selected)
  }

  const decrease = () =>{
    selected === 0
    ? setSelected(tLength - 1)
    : setSelected((prev) => prev - 1);
    console.log(selected)
  }

  return (
    <div>
      <OurClient
        key={OurClients[selected].id}
        image = {OurClients[selected].image}
        name = {OurClients[selected].name}
        parag = {OurClients[selected].parag}
        selected = {selected}
        increase = {increase}
        decrease = {decrease}
      />
    </div>
  )
}

export default OurClientList