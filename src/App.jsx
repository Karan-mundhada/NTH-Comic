// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BackGround from "./components/background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pane from "./components/Pane"
import Home from "./components/Home"; // Import your Home component
import About from "./components/About"; // Import your About component

// const routes = [{
//   path: '/',
//   component: <App/>,
  
// },{
//   path:'/home',
//   component:<Home/>
// },{
//   path:'/about',
//   component:<About/>
// }]

const App = () => {
  

  return (
    
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      
      <Route path="/about" element={<About/>}>
      
      </Route>
      {/* <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      Add other Route components for Leaderboard, Contact, and Login */}
    </Routes>
    <BackGround /> 
    <Pane/>
     <Footer />
  </BrowserRouter>
    
  );
}

export default App;
