import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <AppBar position="static" color="transparent">
            <Toolbar style={{justifyContent: 'center', justifySpacing: 'middle'}}>
                <Button
                    style={{color: 'white'}}
                    variant="text"
                    size="small"
                    color="default"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/roberto-basulto/"
                    target="_blank"
                >
                    LinkedIn
                </Button>

                <Button
                    style={{color: 'white'}}
                    variant="text"
                    size="small"
                    color="default"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Eternal-Flame085"
                    target="_blank"
                >
                    GitHub
                </Button>

                <Button
                    style={{color: 'white'}}
                    variant="text"
                    size="small"
                    color="default"
                    startIcon={<EmailIcon />}
                    href="mailto:roberto.basulto085@gmail.com"
                    target="_blank"
                >
                    Email
                </Button>
            </Toolbar>
        </AppBar>
      )
}

export default Footer;