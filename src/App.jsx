import React from "react";
import create from "zustand";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BackGround from "./components/background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pane from "./components/Pane";
import useStore from "./store/store"; // Import the Zustand store
import Home from "./components/Home"; // Import your Home component
import About from "./components/About"; // Import your About component

function App() {
  const activePage = useStore((state) => state.activePage);

  return (
    <>
      <BrowserRouter>
      <Navbar activePage={activePage} />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* Add other Route components for Leaderboard, Contact, and Login */}
        </Routes>
      <BackGround />
      <Pane />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
