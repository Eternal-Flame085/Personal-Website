import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <Menu style={{ marginTop:0 }} secondary inverted borderless>
      <Menu.Item
        name='logo'
        content={
          <Image
            src={logo}
            size='tiny'
            as={Link}
            to={'/'} 
          />
        }
      />
      
      <Menu.Item
        as={Link} to="/" 
        name='About'
        position='right'
      />
      
      <Menu.Item  
        as={Link} to="/projects"
        name='Projects'
      />
      
      <Menu.Item 
        as={Link} to="/resume"
        name='Resume'
      />

      <Dropdown item text="Contact" basic>
        <Dropdown.Menu direction="left">
          <Dropdown.Item icon='github' text='GitHub' target='_blank' href="https://github.com/Eternal-Flame085" />
          <Dropdown.Item icon='linkedin' text='LinkedIn' target='_blank' href="https://www.linkedin.com/in/roberto-basulto/" />
          <Dropdown.Item icon='google' text='Email' target='_blank' href="mailto:roberto.basulto085@gmail.com" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
}

export default NavBar