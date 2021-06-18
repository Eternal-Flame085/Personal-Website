import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Particles from 'react-particles-js';
import BackgroundImage from "../../images/background.jpg";
import ParticleParams from "./ParticleParams.json"

const useStyles = makeStyles(() => ({
    particleCanvas: {
        position:"fixed!important",
        left:0,
        top:0,
        width:"100%",
        height:"100%",
        zIndex:-1,
        background: `url(${BackgroundImage})`,
        backgroundSize: "cover"
    }
  }))

const Background = () => {
    const classes = useStyles();
    return (
        <div className={classes.particleCanvas}>
            <Particles params={ParticleParams} />
        </div>
    )
};

export default Background