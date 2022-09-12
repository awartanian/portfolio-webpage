import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.scss";

import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import HamburgerButton from "./Components/HamburgerButton/HamburgerButton";
import BgImageMain from "./Components/BgImage/BgImageMain";
import BgImageColored from "./Components/BgImage/BgImageColored";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [themeColor, setThemeColor] = useState("orange");
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(true);

  return (
    <div className="app-container">
      <div className="app-frame">
        <Router>
          <Navbar
            navbar={navbar}
            themeColor={themeColor}
            setThemeColor={setThemeColor}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <main className="pages">
            <HamburgerButton setNavbar={setNavbar} navbar={navbar} />
            <BgImageMain darkMode={darkMode} />
            <BgImageColored themeColor={themeColor} />
            <Switch>
              <Route path="/portfolio-webpage" exact component={About} />
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
              <Redirect to="/portfolio-webpage" />
            </Switch>
            <Footer />
          </main>
        </Router>
      </div>
    </div>
  );
};

export default App;
