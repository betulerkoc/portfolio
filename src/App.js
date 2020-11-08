import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import Resume from "./containers/Resume"
import Home from "./containers/Home"
import Projects from "./containers/Projects"
import Contact from "./containers/Contact"
import Photo from '../public/betull.png';
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 bg-info py-5"
          style={{ height: "100vh", zIndex: 1000 }}
        >
          <ul className="nav nav-pills flex-column">
            <div className="aboutMe">
              <img src={Photo} alt="betul"/>
              <h3>Betul Erkoc</h3>
              <h6>Junior Software Engineer</h6>
            </div>
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link text-white">
              Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link text-white">
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <main
          className="col-6 col-sm-8 col-md-10 py-5"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
