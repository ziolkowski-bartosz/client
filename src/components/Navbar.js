import "../assets/styles/Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/authContext";
import { BsCart2 } from "react-icons/bs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import polenixLogo from "../assets/images/polenixLogo.png";

function Navbar() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowRegister, setIsShowRegister] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShowLogin = () => {
    isShowRegister && handleShowRegister();
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleShowRegister = () => {
    isShowLogin && handleShowLogin();
    setIsShowRegister((isShowRegister) => !isShowRegister);
  };

  const handleFormSuccess = () => {
    setIsFormSuccess((isFormSuccess) => !isFormSuccess);
  };

  useEffect(() => {
    isShowLogin || isShowRegister
      ? (document.body.style.overflow = "hidden") && window.scrollTo(0, 0)
      : (document.body.style.overflow = "");
  }, [isShowLogin, isShowRegister]);

  const onLogout = () => {
    logout();
    return navigate("/");
  };

  const openUserProfile = () => {
    return navigate("/account");
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="nav-logo" src={polenixLogo} alt="Polenix logo" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Polenix</Link>
        <Link to="/menu">Menu</Link>
        {(!user && (
          <>
            <button
              onClick={handleShowLogin}
              className={`${isShowLogin ? "filled" : ""} nav-btn`}
            >
              {isShowLogin ? "Hide" : "Sign in"}
            </button>
            <button
              onClick={handleShowRegister}
              className={`${isShowRegister ? "filled" : ""} nav-btn`}
            >
              {isShowRegister ? "Hide" : "Sign up"}
            </button>
          </>
        )) || (
          <>
            <Link to="/cart">
              <BsCart2 className="nav-cart" />
            </Link>
            <button className="nav-btn" onClick={openUserProfile}>
              My profile
            </button>

            <button onClick={onLogout} className="nav-btn">
              Logout
            </button>
          </>
        )}
        <LoginForm
          isShowLogin={isShowLogin}
          handleShowLogin={handleShowLogin}
        />
        <RegisterForm
          isShowRegister={isShowRegister}
          isFormSuccess={isFormSuccess}
          handleShowRegister={handleShowRegister}
          handleFormSuccess={handleFormSuccess}
        />
      </div>
    </nav>
  );
}

export default Navbar;
