import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import jokerLogo from "../../public/static/Joker.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="https://ctd.pictieee.in/">
        {/* <img src={jokerLogo} alt="Bitly Logo" className="logo-container" /> */}
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/contact">Contact</Link>
        <button className="login-button">Login</button>
        <a href="https://www.ieee.org/">IEEE logo</a>
      </div>
    </div>
  );
};

export default Navbar;
