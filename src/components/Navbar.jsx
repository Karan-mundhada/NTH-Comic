import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="https://ctd.pictieee.in/">
        <img src="NTH-Comic\src\assets\bitly.png"></img>
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="https://www.ieee.org/">IEEE logo</Link>
    </div>
  );
};

export default Navbar;
