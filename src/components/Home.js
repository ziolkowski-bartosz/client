import React, { useEffect, useState, useRef } from 'react'
import "../styles/Home.css"
import Header from "../components/Header";
import ContactForm from '../components/ContactForm';
import PolishFlag from "../assets/polish_flag.png";
import SecondImage from "../assets/meals_photos/kluski_slaskie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import images from "./ImagesCarousel";
import Carousel from './Carousel';
import Coverflow from "react-coverflow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import ReactCountryFlag from "react-country-flag";


const Home = () => {
  //<h2 className="home-h2">Let us make you feel at Polish kitchen</h2>


  return (
      <div className="home-area">
        <div className="home-typing">
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
                .callFunction(() => {
                  console.log(
                    "<strong><span style='color: #00204e;'>String typed out!"
                  );
                })
                .pauseFor(1000)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
        <Fade bottom>
          <div className="home-services">
            <section className="home-service service1">
              <FontAwesomeIcon icon={faUtensils} className="awesome-icon" />
              <h4>Online Ordering</h4>
              <p>
                A long queue to get in? Want to hygge accompanied by 
                <strong> pierogi</strong> in a candlelit home? Today is your day
                to make dinner?
                <br />
                Nothing to lose! Order our food online.
              </p>
            </section>
            <section className="home-service service2">
              <FontAwesomeIcon icon={faTruck} className="awesome-icon" />
              <h4>Fast Delivery</h4>
              <p>
                Whether you order your dishes online or in person, you will
                always receive them in a very short time. What's more, they will
                still be hot. We are not afraid of the Danish weather.
              </p>
            </section>
            <section className="home-service service3">
              <FontAwesomeIcon icon={faStar} className="awesome-icon" />
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
            <h2 className="home-h2">
              Let us make you feel at Polish kitchen
              <img src={PolishFlag} className="pl-flag" alt="pl flag" />
            </h2>
          </Fade>
          <Coverflow
            height={480}
            classes={{ background: "rgb(0,0,0)" }}
            infiniteScroll={true}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            enableScroll={true}
            clickable={true}
            active={0}
            currentFigureScale={1}
          >
            {images.map((image, i) => {
              return <img src={image} key={i} alt="Kluski1" />;
            })}
          </Coverflow>
        </div>
        <ContactForm />
      </div>
  );
}

export default Home