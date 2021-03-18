import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Background from './components/Background';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import BackgroundImage from './images/background.jpg'

export default function App() {
  return (
    <div style={{ position: 'relative', overflow: "hidden" }}>
      <Router>
        <div style={{ position: 'absolute'}}>
          <Image fluid src={BackgroundImage} style={{zIndex: -12}}/>
        </div>

        <div style={{ position: 'absolute'}}>
          <Background />
        </div>


        <NavBar />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
