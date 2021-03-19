import React from 'react'
import { Menu, Image, Container, Grid, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <Container fluid>
      <Grid columns={2}>

        <Grid.Column>
          <Image src={logo} fluid size="small" href="/" />
        </Grid.Column>

        <Grid.Column>
          <Menu secondary inverted floated='right'>
            <Menu.Item
              as={Link} to="/" 
              name='About'
            />
            
            <Menu.Item  
              as={Link} to="/projects"
              name='Projects'
            />
            
            <Menu.Item 
              as={Link} to="/resume"
              name='Resume'
            />

            <Dropdown item text="Contact">
              <Dropdown.Menu direction="left">
                <Dropdown.Item icon='github' text='GitHub' target='_blank' href="https://github.com/Eternal-Flame085" />
                <Dropdown.Item icon='linkedin' text='LinkedIn' target='_blank' href="https://www.linkedin.com/in/roberto-basulto/" />
                <Dropdown.Item icon='google' text='Email' target='_blank' href="mailto:roberto.basulto085@gmail.com" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default NavBar