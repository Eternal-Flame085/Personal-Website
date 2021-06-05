import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Background from './components/Background';
import NavBar from './components/AppBar/AppBar';
import LandingPage from './components/LandingPage/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import BackgroundImage from './images/background.jpg'

const App = () => {
  return (
      <Router>
        {/* <Image fluid src={BackgroundImage} /> */}
        {/* <Background /> */}

        <NavBar />

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/experience">
            <Experience />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>

      </Router>
  );
}

export default App
