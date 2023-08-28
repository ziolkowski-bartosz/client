import "../assets/styles/Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../context/authContext";
import { BsCart2 } from "react-icons/bs";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import polenixLogo from "../assets/images/polenixLogo.jpg";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLoginForm = () => {
    isMobileMenuOpen && toggleMobileMenu();
    isRegisterFormOpen && toggleRegisterForm();
    setIsLoginFormOpen((isShowLogin) => !isShowLogin);
  };

  const toggleRegisterForm = () => {
    isMobileMenuOpen && toggleMobileMenu();
    isLoginFormOpen && toggleLoginForm();
    setIsRegisterFormOpen((prevIsRegisterFormOpen) => !prevIsRegisterFormOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  const onLogout = () => {
    isMobileMenuOpen && toggleMobileMenu();
    logout();
    return navigate("/");
  };

  const openUserProfile = () => {
    isMobileMenuOpen && toggleMobileMenu();
    return navigate("/account");
  };

  const renderAuthButtons = () => {
    if (!user) {
      return (
        <>
          <button
            onClick={toggleLoginForm}
            className={`${isLoginFormOpen ? "filled" : ""} nav-btn`}
          >
            {isLoginFormOpen ? "Hide" : "Sign in"}
          </button>
          <button
            onClick={toggleRegisterForm}
            className={`${isRegisterFormOpen ? "filled" : ""} nav-btn`}
          >
            {isRegisterFormOpen ? "Hide" : "Sign up"}
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/cart" onClick={isMobileMenuOpen && toggleMobileMenu}>
            <BsCart2 className="nav-cart" />
          </Link>
          <button className="nav-btn" onClick={openUserProfile}>
            My profile
          </button>
          <button className="nav-btn" onClick={onLogout}>
            Logout
          </button>
        </>
      );
    }
  };

  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="nav-logo" src={polenixLogo} alt="Polenix logo" />
      </Link>
      <AiOutlineMenu
        className={`ham-menu ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      />
      <div
        className={`nav-links-list ${isMobileMenuOpen ? "mobile-menu" : ""}`}
      >
        <Link to="/" onClick={isMobileMenuOpen && toggleMobileMenu}>
          Home
        </Link>
        <Link to="/easycargo" onClick={isMobileMenuOpen && toggleMobileMenu}>
          EasyCargo
        </Link>
        <Link to="/about" onClick={isMobileMenuOpen && toggleMobileMenu}>
          About Polenix
        </Link>
        <Link to="/menu" onClick={isMobileMenuOpen && toggleMobileMenu}>
          Menu
        </Link>
        {renderAuthButtons()}
      </div>
      <LoginForm
        isLoginFormOpen={isLoginFormOpen}
        toggleLoginForm={toggleLoginForm}
      />
      <RegisterForm
        isRegisterFormOpen={isRegisterFormOpen}
        toggleRegisterForm={toggleRegisterForm}
      />
    </nav>
  );
}

export default Navbar;
