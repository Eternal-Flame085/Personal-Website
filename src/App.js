import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Menu, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import github from './images/github_logo.png';
import linkedin from './images/linkedin_logo.png';
import logo from './images/logo.png';

import Projects from "./components/Project/Projects"

export default function App() {
  return (
    <Router>
      <Menu>
        <Image src={logo} size='mini' href="/" />
        
        <Menu.Item href="/">
          Home
        </Menu.Item>
        
        <Menu.Item href="/projects">
          Projects
        </Menu.Item>
        
        <Menu.Item href="/users">
          Some Link
        </Menu.Item>
      </Menu>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

function LandingPage() {
  return (
    <div align="center">
      <h4>Hi, my name is</h4>
      <h1>Roberto Basulto</h1>
      <h1>I am a Software Developer</h1>
      <p>
      more info will go here
      </p>
      <div>
        <a href="https://github.com/Eternal-Flame085">
          <img src={github} length="30" height="30"></img>
        </a>
        <a href="https://www.linkedin.com/in/roberto-basulto/">
          <img src={linkedin} length="30" height="30"></img>
        </a>
      </div>
      {/* <img src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4"></img> */}
    </div>
    )
}

function Users() {
  return <h2>Users</h2>;
}
