import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from '@material-ui/core';

import experienceData from "./Experience.json";
import ExperienceTemplate from "./ExperienceTemplate";

const useStyles = makeStyles(() => ({
    image: {
        objectFit: "contain",
        width:"100%",
        height:"100%"
    },
    paper: {
        backgroundColor:'#ffffffCC'
    },
    imageGridContainer: {
        height:"350px"
    },
    experienceHeader: {
      marginLeft: "15px",
    },
    experienceSubheader: {
        flexGrow: 1,
        marginLeft: "15px",
    },
    experienceYears: {
        marginRight: "15px"
    },
    toolbar: {
        marginTop: "-15px", 
        marginBottom: "-10px"
    },
    paragraphStyle: {
      marginLeft: "15px",
      marginRight: "15px"
    },
  }));

const Experience = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container direction="column" spacing="2">
                {
                    experienceData.map((experience) => {
                        return (
                            <ExperienceTemplate classes={classes} experience={experience} />
                        )
                    })
                }
            </Grid>
      </Container>
    )
}

export default Experience