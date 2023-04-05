import "../assets/styles/MainContent.css";

import { faStar, faTruck, faUtensils } from "@fortawesome/free-solid-svg-icons";

import ContactForm from "./ContactForm";
import Coverflow from "react-coverflow";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typewriter from "typewriter-effect";
import WeatherForm from "./WeatherForm";
import { homeCarouselImgs as carouselImages } from "../utils/homeCarouselImgs";
import polishFlag from "../assets/images/polishFlag.png";

function MainContent() {
  return (
    <div className="home-container">
      <div className="home-typewriter">
        <Typewriter
          options={{ loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Our dishes ")
              .typeString(
                "<strong><span style='color: #00204e;'>are photogenic</span></strong>"
              )
              .pauseFor(500)
              .deleteChars(10)
              .typeString(
                "<strong><span style='color: #00204e;'>Polish traditional</span></strong>"
              )
              .pauseFor(500)
              .deleteChars(18)
              .typeString(
                "<strong><span style='color: #00204e;'>award winning</span></strong>"
              )
              .pauseFor(500)
              .deleteChars(19)
              .typeString(
                "<strong><span style='color: #00204e;'>will make your day</span></strong>"
              )
              .pauseFor(500)
              .deleteChars(18)
              .typeString(
                "<strong><span style='color: #00204e;'>are Polish grandma-approved</span></strong>"
              )
              .pauseFor(500)
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <Fade bottom>
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
              Whether you order your dishes online or in person, you will always
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
              delicious as possible.
            </p>
          </section>
        </div>
      </Fade>
      <div className="home-carousel">
        <Fade bottom>
          <h2 className="home-carousel-slogan">
            Let us make you feel at Polish kitchen
            <img className="pl-flag" src={polishFlag} alt="polish flag" />
          </h2>
        </Fade>
        <Coverflow
          height={480}
          infiniteScroll={true}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          enableScroll={false}
          clickable={true}
          active={carouselImages.length / 2}
          currentFigureScale={1}
        >
          {carouselImages.map((img, i) => {
            return <img src={img} alt="polish food" key={i} />;
          })}
        </Coverflow>
      </div>
      <section className="home-forms-section">
        <WeatherForm />
        <ContactForm />
      </section>
    </div>
  );
}

export default MainContent;
