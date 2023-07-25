import "../assets/styles/Footer.css";

import { Link } from "react-router-dom";
import React from "react";
import polenixLogo from "../assets/images/polenixLogo.jpg";

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={polenixLogo} alt="polenix logo" />
      <p className="footer-address">
        Anker Engelunds Vej 1 Bygning 101A, 2800 Kgs. Lyngby
      </p>
      <ul className="footer-socials">
        <li>
          <Link to="/">
            <i className="fa fa-facebook"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa fa-twitter"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa fa-instagram"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa fa-youtube"></i>
          </Link>
        </li>

        <li>
          <Link to="/">
            <i className="fa fa-linkedin-square"></i>
          </Link>
        </li>
      </ul>
      <div className="footer-contact">
        <a href="tel:+4581921935">
          <i className="fa fa-phone"></i> 81 92 19 35
        </a>
        <a href="mailto:hello@polenix.dk">
          <i className="fa fa-envelope"></i> hello@polenix.dk
        </a>
      </div>
      <p className="footer-slogan">Let us make you feel at Poland</p>
      <p>© 2023 Polenix. All rights reserved.</p>
    </div>
  );
}

export default Footer;
