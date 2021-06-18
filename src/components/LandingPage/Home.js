import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { 
        Container, 
        Paper,
        Typography,
        Divider,
        Grid } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        minHeight: "80vh",
    },
    paper: {
        backgroundColor:'#ffffffCC'
    },
    image: {
        maxWidth: '93%',
        maxHeight: '93%',
        borderRadius: '2%',
    },
    paragraphStyle: {
        marginLeft: '15px'
    },
    wrapIcon: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        marginLeft: '10px'
    }
  }))

function RecentTechnologies(props) {
    const classes = useStyles();
    return (
        <Grid container>
            {props.techList.map((tech) => {
                return (
                    <Grid item xs={4}>
                        <Typography className={classes.wrapIcon}>
                            <ArrowRightIcon/>
                            {tech}
                        </Typography>
                    </Grid>
                )
            })}
        </Grid>
    )
}  

export default function LandingPage() {
  const classes = useStyles();
  const technologies = [
      "Ruby On Rails",
      "Python",
      "Flask",
      "SQL | Active Record",
      "Javascript",
      "ReactJs",
      "GraphQL",
      "PostgreSQL",
      "Rspec",
      "Git",
      "TravisCI",
  ]
    return (
        <Container className={classes.root}>
            <Paper variant='outlined' elevation={1} className={classes.paper}>
                <Grid container justify='center'>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="headline" component="h2" style={{marginTop:"15px"}} className={classes.paragraphStyle}>
                            About Me
                        </Typography>
                        <Typography gutterBottom className={classes.paragraphStyle}>
                            Hello! I'm Roberto Basulto, a software developer currently based in Miami, FL.
                        </Typography>
                        <Typography gutterBottom className={classes.paragraphStyle}>
                            I have always been into video games, it was a passion that I wanted to follow.
                            My experience with programming was a dual enrollment course during high school. 
                            From there I signed up for a game developer course in college and was introduced to C++ and Java. 
                            I quickly found out I disliked the Art courses I needed to take alongside the programming languages.
                        </Typography>
                        <Typography paragraph className={classes.paragraphStyle}>
                            Shortly after I was introduced to Turing, From the moment I started Turing, I have enjoyed learning the 
                            Ruby language and working with my peers to get through the rigorous program. 
                            I am very eager to continue my career as an important contributor to an organization.
                        </Typography>

                        <Typography gutterBottom variant="headline" component="h3" className={classes.paragraphStyle}>
                            Recent Technologies / Tools I have worked with:
                        </Typography>

                        <RecentTechnologies techList={technologies} />
                    </Grid>
                        
                    <Divider orientation="vertical" flexItem style={{marginRight:"-1px", marginTop:"2%", marginBottom:"2%"}}/>
                    
                    <Grid item container xs={4} justify="center" alignItems="center">
                        <img className={classes.image} src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4" />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}