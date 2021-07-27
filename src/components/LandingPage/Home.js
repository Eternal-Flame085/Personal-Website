import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { 
        Container, 
        Paper,
        Typography,
        Chip,
        Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        marginTop: "10%"
    },
    paper: {
        backgroundColor:'#ffffffCC'
    },
    image: {
        marginTop: '-45%',
        borderRadius: '100%',
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginLeft: '10px'
    },
    chips: {
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '5px'
    }
  }))

function RecentTechnologies(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} style={{paddingBottom:"15px"}}>
            {props.techList.map((tech) => {
                return (
                    <Chip className={classes.chips} size="medium" variant="outlined" label={tech} />
                )
            })}
        </Grid>
    )
}  

export default function LandingPage() {
  const classes = useStyles();
  const technologies = [
      "Ruby On Rails",
      "Rspec",
      "Git",
      "Python",
      "SQL | Active Record | SQL Alchemy",
      "Flask",
      "Javascript",
      "ReactJs",
      "GraphQL",
      "PostgreSQL",
      "TravisCI",
  ]
    return (
        <Container className={classes.root}>
            <Paper variant='outlined' elevation={1} className={classes.paper}>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <img className={classes.image} src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4" />
                    </Grid>

                    <Grid item xs={8}>
                        <Typography gutterBottom variant="headline" component="h2" style={{marginTop:"15px"}}>
                            About Me
                        </Typography>

                        <Typography gutterBottom>
                            Hello! I'm Roberto Basulto, a software developer currently based in Miami, FL.
                        </Typography>

                        <Typography gutterBottom>
                            I have always been into video games, it was a passion that I wanted to follow.
                            My experience with programming was a dual enrollment course during high school. 
                            From there I signed up for a game developer course in college and was introduced to C++ and Java. 
                            I quickly found out I disliked the Art courses I needed to take alongside the programming languages.
                        </Typography>

                        <Typography paragraph>
                            Shortly after I was introduced to Turing, From the moment I started Turing, I have enjoyed learning the 
                            Ruby language and working with my peers to get through the rigorous program. 
                            I am very eager to continue my career as an important contributor to an organization.
                        </Typography>

                        <Typography paragraph variant="headline" component="h3">
                            Recent Technologies / Tools I have worked with:
                        </Typography>

                        <RecentTechnologies techList={technologies} />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}