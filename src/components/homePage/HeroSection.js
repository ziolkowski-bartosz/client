import "../../assets/styles/HeroSection.css";

import { Fade } from "react-awesome-reveal";
import React from "react";
import chlodnikImg from "../../assets/images/mealsImgs/chlodnikNav.jpg";
import kluskiImg from "../../assets/images/mealsImgs/kluskiNav.jpg";

function HeroSection() {
  return (
    <div className="header">
      <div className="header-container">
        <Fade triggerOnce direction="left">
          <img className="header-img" src={kluskiImg} alt="kluski slaskie" />
        </Fade>
        <h1 className="form-slogan header-slogan">
          Polish food is art here, <br></br>
          and so do hospitality.
        </h1>
        <Fade triggerOnce direction="right">
          <img className="header-img" src={chlodnikImg} alt="chlodnik" />
        </Fade>
      </div>
    </div>
  );
}

export default HeroSection;
