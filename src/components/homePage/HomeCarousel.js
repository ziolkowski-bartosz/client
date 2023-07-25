import Carousel from "better-react-carousel";
import React from "react";
import { homeCarouselImgs as carouselImages } from "../../utils/homeCarouselImgs";

const responsiveSettings = [
  {
    breakpoint: 767,
    cols: 1,
    gap: 10,
  },
  {
    breakpoint: 991,
    cols: 2,
    gap: 10,
  },
  {
    breakpoint: 1199,
    gap: 10,
  },
];

export default function HomeCarousel() {
  return (
    <Carousel
      cols={3}
      rows={1}
      gap={150}
      loop
      autoplay={2000}
      responsiveLayout={responsiveSettings}
    >
      {carouselImages.map((img, i) => (
        <Carousel.Item key={i}>
          <img width="80%" key={i} src={img} alt="polish food" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
