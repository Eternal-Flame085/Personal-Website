import React, { Component } from 'react';
import { Header, Grid, Segment, Divider, Container, Image} from 'semantic-ui-react'

import github from '../../images/github_logo.png'
import linkedin from '../../images/linkedin_logo.png'

class LandingPage extends Component {
    render() {
        return (
            <Container style={{paddingTop: 100}}>
                {/* <Segment compact> */}
                    <Grid centered stretched columns={2} divided verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column stretched>
                                    <Header as='h2'>About Me.</Header>
                                    <p>
                                        Hello! I'm Roberto Basulto, a software developer currently based in Miami, FL.<br /><br />
                                        I have always been into video games, it was a passion that I wanted to follow.
                                        My first taste of programming dual enrollment course I attended in high school. 
                                        From there I signed up for a game developer course in college and was introduced to C++ and Java. 
                                        I quickly found out I disliked the Art courses I needed to take along with the coding. 
                                        Looking at my options and what I wanted to do, I was introduced to Turing. 
                                        From the moment I started Turing, I have enjoyed learning the Ruby language and working with my peers 
                                        to get through the rigorous program. I am very eager to continue my career as an important contributor 
                                        to an organization. 
                                    </p>
                            </Grid.Column>

                            <Grid.Column width="4">
                                <Image centered size="medium" src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                {/* </Segment> */}
            </Container>

            //     <a href="https://github.com/Eternal-Flame085">
            //       <img src={github} length="30" height="30"></img>
            //     </a>
            //     <a href="https://www.linkedin.com/in/roberto-basulto/">
            //       <img src={linkedin} length="30" height="30"></img>
        )
    }
}

export default LandingPage