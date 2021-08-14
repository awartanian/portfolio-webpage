import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";

import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HamburgerButton from "./Components/HamburgerButton/HamburgerButton";
import orangeBackground from "./orange-background.png";
import blueBackground from "./blue-background.png";
import yellowBackground from "./yellow-background.png";
import whiteBackground from "./white-background.png";
import darkBackground from "./dark-background.png";

const App = () => {
  const [themeColor, setThemeColor] = useState("orange");
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(true);

  return (
    <div className="app-frame">
      <Router>
        <Navbar navbar={navbar} themeColor={themeColor} setThemeColor={setThemeColor} darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pages" >
        <div className="background-image-container">
          <img src={whiteBackground} className="whiteBackground" alt="background" />
            <img src={darkBackground} className={darkMode ? "darkBackground" : null} alt="background" />
          </div>
          <div className="colored-image-container">
            <img src={orangeBackground} className={themeColor === "orange" ? "orangeBackground" : null} alt="background" />
            <img src={blueBackground} className={themeColor === "blue" ? "blueBackground" : null} alt="background" />
            <img src={yellowBackground} className={themeColor === "yellow" ? "yellowBackground" : null} alt="background" />
          </div>
          <HamburgerButton setNavbar={setNavbar} navbar={navbar} />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>)
}

export default App;
