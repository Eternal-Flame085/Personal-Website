import React, { Component } from 'react';
import { Divider, Grid, Image, Button, Icon, List, Header } from 'semantic-ui-react'

import landing_page from './images/landing_page.png'
import how_it_works from './images/how_it_works.png'
import saved_lists from './images/saved_lists.png'
import survey from './images/survey.png'
import github from '../../../images/github_logo.png'
import heroku from '../../../images/heroku_logo.png'

class PackSmart extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                pack_smart_current: 0,
                
                pack_smart_images: [
                    landing_page,
                    how_it_works,
                    survey,
                    saved_lists
                ]
            }
        }
    }

    nextImage() {
        let current_image = this.state.pack_smart_current
        
        if (current_image < this.state.pack_smart_images.length - 1) {
            this.setState({
                pack_smart_current: current_image += 1
            })
        } else {
            this.setState({
                pack_smart_current: 0
            })
        }
    }

    previousImage() {
        let current_image = this.state.pack_smart_current
        
        if (current_image > 0) {
            current_image -= 1

            this.setState({
                pack_smart_current: current_image
            })
        } else {
            this.setState({
                pack_smart_current: this.state.pack_smart_images.length - 1
            })
        }
    }

    render() {
        return (
            <Grid columns={2} relaxed='very'>
                <Grid.Column style={{ position: "relative", display: "flex"}}>
                    <Image fluid src={this.state.pack_smart_images[this.state.pack_smart_current]} />
                        <div style={{position: "absolute", top: 170}}>
                            <Button active circular basic icon onClick={() => this.previousImage()}>
                                <Icon name='left arrow' />
                            </Button>
                        </div>

                        <div style={{ position: "absolute", top: 170, right: 32 }}>
                            <Button active circular basic icon onClick={() => this.nextImage()}>
                                <Icon name='right arrow' />
                            </Button>
                        </div>
                </Grid.Column>
               
                <Grid.Column>
                    <h1>
                        Pack Smart
                        <Image floated="right" src={github} size='mini' href="https://github.com/Pack-Smart/pack-smart-be" target='_blank' />
                        <Image floated="right" rounded src={heroku} size='mini' href="https://packsmart.herokuapp.com/" target='_blank' />
                    </h1>
    
                    <Divider clearing/>
    
                    <p>
                        Pack Smart is a site that helps users pack for trips by giving them suggestions on items they might need for that trip based on a small survey.
                    </p>
                    <Divider hidden />

                    <Grid container>
                        <Grid.Row>
                            <Header as='h4'>Main technologies used:</Header>
                        </Grid.Row>

                        <Grid.Row columns={2}>
                            <Grid.Column width='5'>
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
                                            SQLAlchemy
                                        </List.Item>                                   
                                    </List>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <div>
                                    <List relaxed>
                                        <List.Item>
                                            <Icon name='right triangle' />
                                            PostgreSQL
                                        </List.Item>

                                        <List.Item>
                                            <Icon name='right triangle' />
                                            Heroku
                                        </List.Item> 

                                        <List.Item>
                                            <Icon name='right triangle' />
                                            TravisCI
                                        </List.Item>                                   
                                    </List>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

export default PackSmart