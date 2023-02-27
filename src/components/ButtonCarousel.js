import React from 'react'
import styled from "styled-components";

const Button = styled.img`
  position: absolute;
  pointer-events: all;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  width: 30px;
  transform: translateY(-50%);
  left: ${(props) => props.side === "prev" && 5}px;
  right: ${(props) => props.side === "next" && 5}px;
`;

const ButtonCarousel = ({ src, side, handleClick }) => {
    return (<Button src={src} side={side} onClick={ () => handleClick()} />);
}


export default ButtonCarousel;