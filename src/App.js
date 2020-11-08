import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import Resume from "./containers/Resume"
import Home from "./containers/Home"
import Projects from "./containers/Projects"
import Photo from '../public/betull.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
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
          </ul>
          <div className="contactMe">
            <h3>Contact me</h3>
            <h6>betulfatmaerkoc@gmail.com</h6>
            <a href="https://www.linkedin.com/in/bet%C3%BCl-erko%C3%A7-a38b24109/" target="_black"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/betulerkoc" target="_black"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </nav>
        <main
          className="col-6 col-sm-8 col-md-10 py-5"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={location.pathname}>
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route path="/" component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
