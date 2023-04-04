import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/polenix_logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Logo} />
      </div>
      <p className="footer-slogan">
        Anker Engelunds Vej 1 Bygning 101A, 2800 Kgs. Lyngby
      </p>
      <ul class="socials">
        <li style={{"margin-left": "-10px"} }>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i class="fa fa-linkedin-square"></i>
          </a>
        </li>
      </ul>
      <p className="footer-second-slogan footer-slogan">
        Let us make you feel at Poland
      </p>
    </div>
  );
};

export default Footer;
