import React, { useRef, useEffect } from "react";
import ButtonCarousel from "./ButtonCarousel";
import leftBtn from "../assets/icons/leftBtn.svg"; // Svg Icon
import rightBtn from "../assets/icons/rightBtn.svg";
import "../styles/Carousel.css";
import styled from "styled-components";

const CarouselItem = styled.div`
  display: flex;
  width: 50%;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => `translateX(${props.xOffset}px)`}; // (*)
  img {
    width: 100%;
    height: 100%;
  }
`;

const Carousel = ({
    images,
    setWidth,
    xOffset,
    handleClickPrev,
    handleClickNext,
}) => {
    const slideRef = useRef();
    useEffect(() => {
        if (slideRef.current) {
            const width = slideRef.current.clientWidth;
            setWidth(width);
        }
    }, [setWidth]);
    return (
        <div className="carousel">
            <CarouselItem xOffset={xOffset} ref={slideRef}>
                {images.map((img, id) => (
                    <img src={img} key={id} />
                ))}
            </CarouselItem>
            <ButtonCarousel
                src={leftBtn}
                side="prev"
                handleClick={() => handleClickPrev()}
            />
            <ButtonCarousel
                src={rightBtn}
                side="next"
                handleClick={() => handleClickNext()}
            />
        </div>
    );
};

export default Carousel