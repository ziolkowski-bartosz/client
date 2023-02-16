import React, { useState } from 'react'
import Logo from '../assets/polenix-logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  return (
    <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;