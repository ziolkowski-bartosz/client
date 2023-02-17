import React, { useState } from 'react'
import Logo from '../assets/polenix_logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { BsCart2 } from "react-icons/bs";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Polenix</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/cart">
          <BsCart2 className='nav-cart'/>
        </Link>
        <button className="nav-btn">Sign in</button>
        <button className="nav-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;