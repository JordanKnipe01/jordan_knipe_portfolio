import React from 'react';
import './header.css';
import profileimg from '../../assets/ProfileImg.png';

const Header = () => {
  return (
    <div className="jk__header section__padding" id="home">
    <div className="jk__header-content">
      <h1 className="gradient__text">Hi, I'm Jordan Knipe</h1>
      <p>A Front-End Developer and Computer Science Student</p>

      

      
    </div>

    <div className="jk__header-image">
      <img src={profileimg} />
    </div>
  </div>
  )};

export default Header;
