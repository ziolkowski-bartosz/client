import "../assets/styles/HeroSection.css";

import Fade from "react-reveal/Fade";
import React from "react";
import chlodnikImg from "../assets/images/mealsImgs/chlodnikNav.png";
import kluskiImg from "../assets/images/mealsImgs/kluskiNav.png";

function HeroSection() {
  return (
    <div className="header">
      <div className="header-container">
        <Fade left>
          <img className="header-img" src={kluskiImg} alt="kluski slaskie" />
        </Fade>
        <h1 className="form-slogan header-slogan">
          Polish food is art here, and so do hospitality.
        </h1>
        <Fade right>
          <img className="header-img" src={chlodnikImg} alt="chlodnik" />
        </Fade>
      </div>
    </div>
  );
}

export default HeroSection;
