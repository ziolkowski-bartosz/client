import "../../assets/styles/MainContent.css";

import { faStar, faTruck, faUtensils } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "../forms/ContactForm";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCarousel from "./HomeCarousel";
import HomeTypewriter from "./HomeTypewriter";
import React from "react";
import WeatherForm from "../forms/WeatherForm";
import polishFlag from "../../assets/images/polishFlag.png";

function MainContent() {
  return (
    <div className="home-container">
      <HomeTypewriter />
      <Fade cascade direction="bottom">
        <div className="home-services">
          <section className="home-service service1">
            <FontAwesomeIcon icon={faUtensils} className="service-icon" />
            <h4>Online Ordering</h4>
            <p>
              A long queue to get in? Want to hygge accompanied by{" "}
              <strong>pierogi</strong> in a candlelit home? Today is your day to
              make dinner? Nothing to lose! Order our food online.
            </p>
          </section>
          <section className="home-service service2">
            <FontAwesomeIcon icon={faTruck} className="service-icon" />
            <h4>Fast Delivery</h4>
            <p>
              Whether you order your dishes online or in person, you will
              receive them in a very short time. What's more, they will still be
              hot. We are not afraid of the Danish weather.
            </p>
          </section>
          <section className="home-service service3">
            <FontAwesomeIcon icon={faStar} className="service-icon" />
            <h4>Top quality</h4>
            <p>
              A Polish grandma rules in our kitchen. We use only the best
              products and do our best to make our dishes as traditional and
              delicious as possible. Try it yourself!
            </p>
          </section>
        </div>
      </Fade>
      <div className="home-carousel">
        <Fade direction="up">
          <h2 className="home-carousel-slogan">
            Let us make you feel at Polish kitchen
            <img className="pl-flag" src={polishFlag} alt="polish flag" />
          </h2>
        </Fade>
        <HomeCarousel />
      </div>
      <section className="home-forms-section">
        <WeatherForm />
        <ContactForm />
      </section>
    </div>
  );
}

export default MainContent;
