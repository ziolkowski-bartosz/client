import "../assets/styles/SiteContent.css";

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/AboutPage";
import Cart from "../pages/CartPage";
import Home from "../pages/HomePage";
import Menu from "../pages/MenuPage";
import UserProfile from "../pages/UserProfilePage";

function SiteContent() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default SiteContent;
