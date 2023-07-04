import "../assets/styles/ImageCarousel.css";

import React, { useEffect, useRef, useState } from "react";

import { aboutCarouselImgs as images } from "../utils/aboutCarouselImgs";

function ImageCarousel() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSliderIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [sliderIndex]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translate3d(${-sliderIndex * 100}%, 0, 0)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} className="slide" alt="polish food" />
        ))}
      </div>
      <div className="carousel-control-panel">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`carousel-control${
              sliderIndex === idx ? " active" : ""
            }`}
            onClick={() => {
              setSliderIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
