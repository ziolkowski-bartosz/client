import React, { useEffect, useState, useRef } from 'react'
import "../styles/Home.css"
import Header from "../components/Header";
import ContactForm  from '../components/ContactForm';
import FirstImage from "../assets/meals_photos/chlodnik.png";
import SecondImage from "../assets/meals_photos/kluski_slaskie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import images from "./ImagesCarousel";

const Home = () => {
  //<h2 className="home-h2">Let us make you feel at Polish kitchen</h2>
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
      <div className="home-services" data-aos="fade-up">

      </div>
      <motion.div ref={carousel} className="home-carousel" whileTap={{ cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="home-inner-carousel">
          {images.map((image) => {
            return(
          <motion.div className="carousel-item">
                <img key={image} src={image} alt=""/>
          </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <ContactForm />
    </div>
  );
}

export default Home