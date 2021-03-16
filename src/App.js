import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'

import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Projects from "./components/Project"

export default function App() {
  return (
    <Router>
      <NavBar />

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

function Users() {
  return <h2>Users</h2>;
}
