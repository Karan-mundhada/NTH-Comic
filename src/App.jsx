import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import BackGround from "./components/background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pane from "./components/Pane";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} /> */}
      </BrowserRouter>
      <BackGround />
      <Pane/>
      <Footer />
    </>
  );
}

export default App;
