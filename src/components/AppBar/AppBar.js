import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../images/logo.png';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  logo: {
    maxWidth: '80px',
    marginRight: '10px'
  },
  logoLink: {
    flexGrow: 1,
  }
}))

function DesktopMenu(props) {
  return (
    <>
      {props.menuLinks.map((menuLink) => {
        const { menuTitle, pageUrl } = menuLink;
        return (
          <Button variant='text' color="primary" component={RouterLink} to={pageUrl}>
            {menuTitle}
          </Button>
        )
      })}
    </>
  )
}

const NavBar = () => {
  const classes = useStyles();
  const menulinks = [
    {menuTitle: "Home", pageUrl: "/"},
    {menuTitle: "Projects", pageUrl: "/projects"},
    {menuTitle: "Experience", pageUrl: "/experience"},
    {menuTitle: "Resume", pageUrl: "/resume"},
  ]

  return (
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        <Link className={classes.logoLink} component={RouterLink} to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>

        <DesktopMenu menuLinks={menulinks} />
      </Toolbar>
    </AppBar>





    // <Menu style={{ marginTop:0 }} secondary inverted borderless>
    //   <Menu.Item
    //     name='logo'
    //     content={
    //       <Image
    //         src={logo}
    //         size='tiny'
    //         as={Link}
    //         to={'/'} 
    //       />
    //     }
    //   />
      
    //   <Menu.Item
    //     as={Link} to="/" 
    //     name='About'
    //     position='right'
    //   />
      
    //   <Menu.Item  
    //     as={Link} to="/projects"
    //     name='Projects'
    //   />

    //   <Menu.Item 
    //     as={Link} to="/experience"
    //     name='Experience'
    //   />
      
    //   <Menu.Item 
    //     as={Link} to="/resume"
    //     name='Resume'
    //   />

    //   <Dropdown item text="Contact" basic>
    //     <Dropdown.Menu direction="left">
    //       <Dropdown.Item icon='github' text='GitHub' target='_blank' href="https://github.com/Eternal-Flame085" />
    //       <Dropdown.Item icon='linkedin' text='LinkedIn' target='_blank' href="https://www.linkedin.com/in/roberto-basulto/" />
    //       <Dropdown.Item icon='google' text='Email' target='_blank' href="mailto:roberto.basulto085@gmail.com" />
    //     </Dropdown.Menu>
    //   </Dropdown>
    // </Menu>
  )
}

export default NavBar