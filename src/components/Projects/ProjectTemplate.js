import React from "react";
import {
  Paper,
  Chip,
  Typography,
  Divider,
  IconButton,
  Toolbar,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Image from "material-ui-image";
import Carousel from "react-material-ui-carousel";

function ImageCarousel(props) {
  return (
    <Grid item xs={6}>
      <Carousel animation="slide">
        {props.images.map((image) => {
          return <Image src={image} aspectRatio={14 / 9} />;
        })}
      </Carousel>
    </Grid>
  );
}

function ProjectInfo(props) {
  return (
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
        <IconButton color="inherit" target="_blank" href={props.project.gitHub}>
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
  );
}

export default function ProjectTemplate(props) {
  return (
    <Grid item xs={12}>
      <Paper variant="outlined" className={props.classes.paper}>
        <Grid container alignItems="center">
            {(props.projectNum % 2 === 0) ? (
                <>
                    <ImageCarousel images={props.project.images} />
                    <ProjectInfo classes={props.classes} project={props.project} />
                </>
            ) : (
                <>
                    <ProjectInfo classes={props.classes} project={props.project} />
                    <ImageCarousel images={props.project.images} />
                </>
            )}
        </Grid>
      </Paper>
    </Grid>
  );
}
