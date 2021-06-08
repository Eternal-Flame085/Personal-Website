import React from "react";
import { Paper, Typography, Divider, Toolbar, Grid } from "@material-ui/core"

export default function ExperienceTemplate(props) {
    return (
        <Grid item xs={12}>
            <Paper variant="outlined">
                <Grid container alignItems="center">
                    <Grid item xs={5} className={props.classes.imageGridContainer}>
                            <img className={props.classes.image} src={props.experience.imageUrl} />
                    </Grid>
        
                    <Grid item xs={7}>
                            <Typography
                                className={props.classes.experienceHeader}
                                variant="headline"
                                component="h2"
                            >
                                {props.experience.companyName}
                            </Typography>

                        <Toolbar disableGutters variant="dense" className={props.classes.toolbar} >
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
                            style={{ marginTop: "15px" }}
                            className={props.classes.paragraphStyle}
                        >
                            { props.experience.description }
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}