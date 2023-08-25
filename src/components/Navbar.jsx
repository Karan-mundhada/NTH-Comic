import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import jokerLogo from "../../public/static/Joker.png";
// import "../styles/tailwind.css"; // You might not need this line

const Navbar = () => {
  return (
    <>
    <Link to="https://ctd.pictieee.in/">
        {/* <div className="dummy w-16"></div> */}
        <img
          src={jokerLogo}
          alt="Bitly Logo"
          className="logo-container w-16 h-16"
        />
      </Link>
    <div className="navbar">
      
      {/* <div className="nav-links"> */}
        <div></div>
        <div></div>
        <div></div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/contact">Contact</Link>
        <button className="login-button">Login</button>
        <a href="https://www.ieee.org/">IEEE logo</a>
        <div></div>
      {/* </div> */}
    </div>
    </>
  );
};

export default Navbar;
