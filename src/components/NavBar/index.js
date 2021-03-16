import React, { Component } from 'react'
import { Menu, Image, Container, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import logo from '../../images/wide_logo.png';

export default class NavBar extends Component {
    render() {
        return (
            <Container fluid>
            <Grid columns={2}>
    
              <Grid.Column>
                <Image src={logo} fluid size="small" href="/" />
              </Grid.Column>
    
              <Grid.Column>
                <Menu secondary floated='right'>
                  <Menu.Item
                    as={Link} to="/" 
                    name='About'
                  />
                  
                  <Menu.Item  
                    as={Link} to="/projects"
                    name='Projects'
                  />
                  
                  <Menu.Item 
                    as={Link} to="/users"
                    name='Users'
                  />
                </Menu>
              </Grid.Column>
            </Grid>
          </Container>
        )
    }
}