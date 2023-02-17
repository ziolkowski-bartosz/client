import React, { useState, useEffect } from 'react'
import '../styles/Header.css';
import FirstMeal from '../assets/meals_photos/kluski_slaskie_circle.png';
import SecondMeal from '../assets/meals_photos/chlodnik.png';
import Logo from "../assets/polenix_logo.png";

const Header = () => {
  const [headerOpacity, setHeaderOpacity] = useState(1);

  const listenScrollEvent = () => {
    let currentScrollPos = window.pageYOffset;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let xd = 200;
    currentScrollPos < 0 && currentScrollPos < xd ? setHeaderOpacity(0) : setHeaderOpacity(1)
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  });

  return (
    <>
      <div className="header" style={{ opacity: headerOpacity }}>
        <div className="header-image">
          <div className="header-meal-image">
            <img alt="kluski slaskie image" src={FirstMeal} />
          </div>
        </div>
        <div className="header-second-meal-image">
          <img alt="chlodnik image" src={SecondMeal} />
        </div>
        <h1 className="slogan">
          Polish food is art here,<br/>and so do hospitality.
        </h1>
      </div>
    </>
  );
}

export default Header