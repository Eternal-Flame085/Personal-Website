import React from "react";
import { Paper, Chip, Typography, Divider, IconButton, Toolbar, Grid } from "@material-ui/core"

// import Paper from "@material-ui/core/paper";
// import Chip from "@material-ui/core/Chip";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Toolbar from "@material-ui/core/Toolbar";
// import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Image from 'material-ui-image';
import Carousel from 'react-material-ui-carousel';

export default function ProjectTemplate(props) {
    return (
        <Grid item xs={12}>
            <Paper variant="outlined">
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Carousel animation="slide">
                            {
                                props.project.images.map((image) => {
                                    return (
                                        <Image src={image} aspectRatio={(14/9)} />
                                    )
                                })
                            }
                        </Carousel>
                    </Grid>
        
                    <Grid item xs={6}>
                        <Toolbar disableGutters variant="dense">
                        <Typography
                            className={props.classes.projectHeader}
                            variant="headline"
                            component="h2"
                        >
                            {props.project.name}
                        </Typography>
                        <IconButton
                            color="inherit"
                            target="_blank"
                            href={props.project.webLink}
                        >
                            <WebIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            target="_blank"
                            href={props.project.gitHub}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                        </Toolbar>
            
                        <Divider variant="middle" />
            
                        <Typography
                        paragraph
                        variant="body1"
                        style={{
                            marginTop: "15px",
                        }}
                        className={props.classes.paragraphStyle}
                        >
                        {props.project.description}
                        </Typography>
                        <Typography
                        paragraph
                        variant="headline"
                        component="h4"
                        className={props.classes.paragraphStyle}
                        >
                        Built with:
                        </Typography>
            
                        <div className={props.classes.chips}>
                        {props.project.techUsed.map((tech) => {
                            return <Chip label={tech} />;
                        })}
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
  }