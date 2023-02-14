import React from 'react'
import css from './Intro.module.sass'
import phone from '../../assets/img/phone.jpg'
import Svg1ApplePlayBlue from '../../assets/Market/Svg1ApplePlayBlue'
import Svg1AppStore from '../../assets/Market/Svg1AppStore'

const Intro = () => {
  return (
    <div class={css.wrap}>
      <div class={css.container}>
        <p>New E-commerce App best for You</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed vulputate vitae velit dictum cursus amet. Turpis donec ut velit quis. Cursus commodo, eget urna, sapien amet. </p>
        <div className={css.icons}>
          <a href="/"><Svg1ApplePlayBlue/></a>
          <a href="/"><Svg1AppStore/></a>
        </div>
      </div>  
      <div class={css.photo}>
        <img src={phone} alt=""/>
      </div>
    </div>
  )
}

export default Intro