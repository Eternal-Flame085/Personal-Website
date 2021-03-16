import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Menu, Image, Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import logo from './images/wide_logo.png';

import LandingPage from './components/LandingPage/LandingPage'
import Projects from "./components/Project/Projects"

export default function App() {
  return (
    <Router>
      <Container fluid>
        <Grid columns={2}>

          <Grid.Column>
            <Image src={logo} fluid size="small" href="/" />
          </Grid.Column>

          <Grid.Column>
            <Menu secondary floated='right'>
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
          </Grid.Column>
        </Grid>
      </Container>

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
