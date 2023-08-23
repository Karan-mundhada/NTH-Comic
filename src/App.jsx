import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <Navbar activePage={activePage} />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      {/* Add other Route components for Leaderboard, Contact, and Login */}
      <BackGround />
      <Pane />
      <Footer />
    </Router>
  );
}

export default App;
