// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BackGround from "./components/background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pane from "./components/Pane";
import About from "./components/About"; // Import your About component
/* src/index.css */
/* ...any other global styles or imports... */
import './styles/tailwind.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BackGround />
      <Routes>
        <Route path="/" element={<Pane />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      Add other Route components for Leaderboard, Contact, and Login */}
      
      </Routes>
      {/*  */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
