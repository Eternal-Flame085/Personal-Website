import React, { Component } from 'react';
import { Header, Grid, Container, Image, List, Icon} from 'semantic-ui-react'

import github from '../../images/github_logo.png'
import linkedin from '../../images/linkedin_logo.png'

class LandingPage extends Component {
    render() {
        return (
            <Container style={{paddingTop: 100}}>
                <Grid centered stretched columns={2} divided verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column stretched width="8">
                            <Grid container>
                                <Grid.Row>
                                    <div>
                                        <Header as='h2'>About Me</Header>
                                        <p> Hello! I'm Roberto Basulto, a software developer currently based in Miami, FL.</p>
                                        <p>
                                            I have always been into video games, it was a passion that I wanted to follow.
                                            My experience with programming was a dual enrollment course during high school. 
                                            From there I signed up for a game developer course in college and was introduced to C++ and Java. 
                                            I quickly found out I disliked the Art courses I needed to take alongside the programming languages.
                                        </p>
                                        <p>
                                            Shortly after I was introduced to Turing, From the moment I started Turing, I have enjoyed learning the 
                                            Ruby language and working with my peers to get through the rigorous program. 
                                            I am very eager to continue my career as an important contributor to an organization. <br/><br/>
                                        </p>
                                        <Header as='h4'>Recent technologies I have worked with: </Header>
                                    </div>
                                </Grid.Row>

                                <Grid.Row columns={2}>
                                    <Grid.Column width='5'>
                                        <div>
                                            <List relaxed>
                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    Ruby On Rails
                                                </List.Item>

                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    GraphQL
                                                </List.Item>

                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    PostgreSQL
                                                </List.Item>                                   
                                            </List>
                                        </div>
                                    </Grid.Column>

                                    <Grid.Column>
                                        <div>
                                            <List relaxed>
                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    Python
                                                </List.Item>

                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    Flask
                                                </List.Item> 

                                                <List.Item>
                                                    <Icon name='right triangle' />
                                                    SQL | Active Record | SQLAlchemy
                                                </List.Item>                                   
                                            </List>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>

                        <Grid.Column width="5">
                            <Image rounded centered size="medium" src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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