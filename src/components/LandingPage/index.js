import React from 'react';
import { Header, Grid, Container, Image, List, Icon, Segment } from 'semantic-ui-react'

const LandingPage = () => {
    return (
        <Container style={{width:'70%', paddingTop:'5%'}}>
            <Segment compact style={{backgroundColor:'#ffffffCC'}}>
                <Grid divided> 
                    <Grid.Row>
                        <Grid.Column width='11'>
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
                                I am very eager to continue my career as an important contributor to an organization.
                            </p>

                            <Header as='h4'>Recent technologies I have worked with: </Header>

                            <Grid relaxed>
                                <Grid.Column width='5'>
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
                                </Grid.Column>

                                <Grid.Column width='7'>
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
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>

                        <Grid.Column width='5'floated='right' verticalAlign='middle'>
                            <Image rounded centered fluid src="https://avatars.githubusercontent.com/u/63683549?s=400&u=2a570652ac4f72944a49c64842702154c7466b5c&v=4" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}

export default LandingPage