import "../assets/styles/Footer.css";

import { Link } from "react-router-dom";
import React from "react";
import polenixLogo from "../assets/images/polenixLogo.png";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={polenixLogo} alt="polenix logo" />
      <p>Anker Engelunds Vej 1 Bygning 101A, 2800 Kgs. Lyngby</p>
      <ul class="footer-socials">
        <li>
          <Link to="/">
            <i class="fa fa-facebook"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i class="fa fa-twitter"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i class="fa fa-instagram"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i class="fa fa-youtube"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i class="fa fa-linkedin-square"></i>
          </Link>
        </li>
      </ul>
      <p>Let us make you feel at Poland</p>
    </div>
  );
}

export default Footer;
