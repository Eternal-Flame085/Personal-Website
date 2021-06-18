import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <ClickAwayListener onClickAway={handleClickAway}>
            <Paper>
              <MenuList id="menu-list-grow">
                <a target='_blank' href="https://www.linkedin.com/in/roberto-basulto/">
                  <MenuItem>
                    <ListItemIcon style={{marginRight:-30}}>
                      <LinkedInIcon />
                    </ListItemIcon>

                    <Typography>
                      LinkedIn
                    </Typography>
                  </MenuItem>
                </a>

                <a target='_blank' href="https://github.com/Eternal-Flame085">
                  <MenuItem>
                    <ListItemIcon style={{marginRight:-30}}>
                      <GitHubIcon />
                    </ListItemIcon>

                    <Typography>
                      GitHub
                    </Typography>
                  </MenuItem>
                </a>

                <a target='_blank' href="mailto:roberto.basulto085@gmail.com">
                  <MenuItem>
                    <ListItemIcon style={{marginRight:-30}}>
                      <EmailIcon />
                    </ListItemIcon>

                    <Typography>
                      Email
                    </Typography>
                  </MenuItem>
                </a>
              </MenuList>
            </Paper>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>

      {props.menuLinks.map((menuLink) => {
        const { menuTitle, pageUrl } = menuLink;
        return (
          <Button className={props.classes.navColor} variant='text' size='large' component={RouterLink} to={pageUrl}>
            {menuTitle}
          </Button>
        )
      })}
      <IconButton onClick={handleClick('bottom')}>
        <MenuIcon className={props.classes.navColor} />
      </IconButton>
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

        <DesktopMenu classes={classes} menuLinks={menulinks}/>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar