import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Image, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Background from './components/Background';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import BackgroundImage from './images/background.jpg'

export default function App() {
  return (
    <Container fluid style={{ position: 'relative', overflow: "hidden", minHeight:'100vh' }}>
      <Router>

        <Container fluid style={{ position: 'absolute'}}>
          <Image fluid src={BackgroundImage}/>
        </Container>

        <Container style={{ position: 'absolute', inHeight:'100vh'}}>
          <Background />
        </Container>


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
    </Container>
  );
}
