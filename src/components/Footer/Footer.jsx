import React from 'react'
import Svg99FaceBook from '../../assets/Social/Svg99FaceBook';
import Svg99Instagram from '../../assets/Social/Svg99Instagram';
import Svg99Twitter from '../../assets/Social/Svg99Twitter';
import Svg99YouTube from '../../assets/Social/Svg99YouTube';
import SvgLogo from '../../assets/SvgLogo';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import css from './Footer.module.sass'

const footerColumns = [
  {
      id: 1,
      headline: "Quick Links",
      links: ["Sign Up", "About Us"],
  },
  {
      id: 2,
      headline: "Others",
      links: ["User FAQs", "Contact Us", "Legal", "Privacy Policy", "Terms and Conditions"],
  },
  {
      id: 3,
      headline: "Products",
      links: ["Send", "Receive", "Buy"],
  },
];

const socials = [
  <Svg99YouTube/>,
  <Svg99Instagram/>,
  <Svg99FaceBook/>,
  <Svg99Twitter/>
];

const Footer = () => {
  return (
    <div className={css.footer} id = 'footer'>
      <div className={css.wrap}>
        <div className={css.footer__logo}>
          <SvgLogo color={'#fff'}/>
        </div>
        <div className={css.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <div className={css.footer__content__col} key={id}>
              <span className={css.footer__content__col__headline}>{headline}</span>
              <ul className={css.footer__content__col__links}>
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={css.subscribe}>
          <p>Subscribe to our newsletter and be the first to know about our updates</p>
          <div className={css.form}>
            <Input 
              placeholder = 'Email Address'
              
              />
            <Button children='Subscribe'/>
          </div>
        </div>
        <div className={css.footer__bootom}>
           <p>Copyright © 2020. All rights reserved.</p>       
           <nav className={css.footer__base__socials}>
              {socials.map((icon, index) => (
                 <a key={index + 1} href="/">{icon}</a>
              ))}
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer