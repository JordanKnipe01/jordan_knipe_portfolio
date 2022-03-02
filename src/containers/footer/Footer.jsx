import React from 'react';
import './footer.css';

import linkedin from '../../assets/LinkedIn.png'
const Footer = () => {
  return (
  
  <div className='main__footer section__padding'>
    <div className='main__footer-heading'></div>
    <h1 className='gradient__text'>Contact</h1>
    <div>
      <a href='https://www.linkedin.com/in/jordan-knipe-230566149/'>
    <img src={linkedin} className='linkedin-icon'></img></a>
  </div>
  <p className='copyright'> ©Jordan Knipe</p>
  </div>
  
  )
};

export default Footer;
