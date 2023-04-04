import "../assets/styles/AboutSection.css";

import ImageCarousel from "../components/ImageCarousel";
import React from "react";

function AboutSection() {
  return (
    <div className="about-container">
      <h1 className="form-slogan about-slogan">
        The only place in Denmark where you can taste Polish cuisine
      </h1>
      <div className="about-info-container">
        <p>
          The idea for this place was born 20 years ago during the college days
          when three guys, Romek, Tomek, and Atomek, went to study in Denmark
          from Poland. Fate brought them together and they wanted to introduce
          Polish cuisine to the Danes. They started with a food truck, where
          they sold Polish sour soup, <strong>żurek</strong>, in plastic cups on
          the university campus.
          <br />
          <br />
          Today, "Polenix" restaurant is a charming place where you can get to
          know Polish culture better. You can organize workshops, birthday
          parties, or other events here.
        </p>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default AboutSection;
