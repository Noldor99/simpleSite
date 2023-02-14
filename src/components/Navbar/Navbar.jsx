import React, { useState } from 'react';
import css from './Navbar.module.sass';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SvgLogo from '../../assets/SvgLogo';
import {Link} from 'react-scroll'

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={css.header} id='home'>
 
        <div className={css.box}>
          <div className={css.logo_image}>
            <SvgLogo/>
          </div>
          <ul
            className={
              nav ? [css.menu, css.active].join(' ') : [css.menu]
            }
          >
            <li>
              <Link 
                to='home'
                smooth={true}
                onClick = {() => setNav(false)}
                >Home</Link>
            </li>
            <li>
              <Link 
                to='castomers'
                smooth={true}
                onClick = {() => setNav(false)}
                >About</Link>
            </li>
            <li>
              <Link 
                to='footer'
                smooth={true}
                onClick = {() => setNav(false)}
                >Contact Us</Link>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
      
      </div>
    </header>
  );
};

export default NAvbar;
