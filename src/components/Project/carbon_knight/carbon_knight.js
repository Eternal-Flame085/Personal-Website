import React, { Component } from 'react';
import { Container, Divider, Grid, Image, Segment, Button, Icon } from 'semantic-ui-react'

import carbon_knight from './images/carbon_knight.png'
import home_page from './images/home_page.png'
import saved_footprints from './images/saved_footprints.png'
import new_vehicle from './images/new_vehicle.png'
import mileage_input from './images/mileage_input.png'
import resources from './images/resources.png'
import github from '../../../images/github_logo.png'
import heroku from '../../../images/heroku_logo.png'

class CarbonKnight extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                carbon_knight_current: 0,
                
                carbon_knight_images: [
                    carbon_knight,
                    home_page,
                    saved_footprints,
                    new_vehicle,
                    mileage_input,
                    resources
                ]
            }
        }
    }

    nextImage() {
        let current_image = this.state.carbon_knight_current
        
        if (current_image < this.state.carbon_knight_images.length - 1) {
            current_image += 1

            this.setState({
                carbon_knight_current: current_image
            })
        } else {
            this.setState({
                carbon_knight_current: 0
            })
        }
    }

    previousImage() {
        let current_image = this.state.carbon_knight_current
        
        if (current_image > 0) {
            this.setState({
                carbon_knight_current: current_image -= 1
            })
        } else {
            this.setState({
                carbon_knight_current: this.state.carbon_knight_images.length - 1
            })
        }
    }

    render() {
        return (
            <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <h1>
                        CarbonKnight
                        <Image floated="right" src={github} size='mini' href="https://github.com/Carbon-Knight" target='_blank' />
                        <Image floated="right"src={heroku} size='mini' href="https://carbon-knight.herokuapp.com/" target='_blank' />
                    </h1>

                    <Divider clearing/>

                    <p>
                    CarbonKnight is an application where a user is able to input their travel data and see what their unique carbon footprint is over time.
                    <Divider hidden />
                    <b>Technologies used:</b> Ruby, Rails, GraphQL, Active Record, PostgreSQL, Heroku, Travis
                    </p>
                </Grid.Column>
                <Grid.Column style={{ position: "relative", display: "flex"}}> 
                    <Image fluid src={this.state.carbon_knight_images[this.state.carbon_knight_current]} />
                    <div style={{position: "absolute", top: 170}}>
                        <Button active circular icon basic onClick={() => this.previousImage()}>
                            <Icon name='arrow left' />
                        </Button>
                    </div>

                    <div style={{ position: "absolute", top: 170, right: 32 }}>
                        <Button active circular basic icon onClick={() => this.nextImage()}>
                            <Icon name='arrow right' />
                        </Button>
                    </div>
                </Grid.Column>
            </Grid>
        )
    }
}

export default CarbonKnight