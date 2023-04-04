import React from 'react'
import "../styles/About.css";

const About = () => {
    return (
      <>
        <div className="about-area">
          <h1 className="about-slogan">
            The only place in Denmark where you can taste Polish cuisine
          </h1>
        </div>
        <h2>We are here:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.4413301142195!2d12.519186951696332!3d55.785574180466696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e6328b8bd5d%3A0xcf045cde0449c6c5!2sDu%C5%84ski%20Uniwersytet%20Techniczny!5e0!3m2!1spl!2sdk!4v1676726542644!5m2!1spl!2sdk"
          width="100%"
          title="Polenix localization"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    );
}

export default About