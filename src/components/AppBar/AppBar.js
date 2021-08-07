import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'

import logo from '../../images/logo.png';


const useStyles = makeStyles(() => ({
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
  },
  navColor: {
    color: 'white',
    textTransform: 'none'
  }
}))

function DesktopMenu(props) {
  return (
    <>
      {props.menuLinks.map((menuLink) => {
        const { menuTitle, pageUrl } = menuLink;
        return (
          <Button className={props.classes.navColor} variant='text' size='large' component={RouterLink} to={pageUrl}>
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
    <Container>
      <AppBar position="static" color="transparent" className={classes.root}>
        <Toolbar>
          <Link className={classes.logoLink} component={RouterLink} to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>

          <DesktopMenu classes={classes} menuLinks={menulinks}/>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar