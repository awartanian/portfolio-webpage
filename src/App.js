import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";
import background from "./background.png";

import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HamburgerButton from "./Components/HamburgerButton/HamburgerButton";


const App = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <div className="app-frame">
      <Router>
        <Navbar navbar={navbar} />
        <main className="pages" style={{ backgroundImage: `url(${background})` }}>
          <HamburgerButton setNavbar={setNavbar} navbar={navbar} />
          <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/about" exact component={About}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/contact" exact component={Contact}/>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </main>
      </Router>
    </div>)
}

export default App;
