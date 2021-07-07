import React from "react";
import { Paper, Typography, Divider, Toolbar, Grid } from "@material-ui/core";

function ExperienceImage(props) {
  return (
    <Grid item xs={5} className={props.classes.imageGridContainer}>
      <img className={props.classes.image} src={props.imageUrl} />
    </Grid>
  );
}

function ExperienceInfo(props) {
  return (
    <Grid item xs={7}>
      <Typography
        className={props.classes.experienceHeader}
        variant="headline"
        component="h2"
      >
        {props.experience.companyName}
      </Typography>

      <Toolbar disableGutters variant="dense" className={props.classes.toolbar}>
        <Typography
          className={props.classes.experienceSubheader}
          color="textSecondary"
          variant="subheading"
          component="h3"
        >
          {props.experience.position}
        </Typography>

        <Typography
          className={props.classes.experienceYears}
          color="textSecondary"
          component="h3"
        >
          {props.experience.years}
        </Typography>
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
        {props.experience.description}
      </Typography>
    </Grid>
  );
}

export default function ExperienceTemplate(props) {
  return (
    <Grid item xs={12}>
      <Paper variant="outlined" className={props.classes.paper}>
        <Grid container alignItems="center">
            {(props.experienceNum % 2 === 0) ? (
                <>
                    <ExperienceImage classes={props.classes} imageUrl={props.experience.imageUrl} />
                    <ExperienceInfo classes={props.classes} experience={props.experience} />
                </>
            ) : (
                <>
                    <ExperienceInfo classes={props.classes} experience={props.experience} />
                    <ExperienceImage classes={props.classes} imageUrl={props.experience.imageUrl} />
                </>
            )}
        </Grid>
      </Paper>
    </Grid>
  );
}
