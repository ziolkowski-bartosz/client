import AboutSection from "../components/AboutSection";
import React from "react";
import styled from "styled-components";

const MapSlogan = styled.h2`
  margin: 0.5rem 0;

  font-family: Pacifico, sans-serif;
  line-height: 6vh;
  text-align: center;

  background-color: #ff6b21;
  color: black;
`;

function About() {
  return (
    <>
      <AboutSection />
      <MapSlogan>We are here:</MapSlogan>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.4413301142195!2d12.519186951696332!3d55.785574180466696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e6328b8bd5d%3A0xcf045cde0449c6c5!2sDu%C5%84ski%20Uniwersytet%20Techniczny!5e0!3m2!1spl!2sdk!4v1676726542644!5m2!1spl!2sdk"
        width="100%"
        title="Polenix localization"
        height="350"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default About;
