import React, { Component } from 'react';
import { Container, Divider, Grid, Image, Segment } from 'semantic-ui-react'
import './Projects.css'

import pack_smart from '../../images/pack_smart.png'
import carbon_knight from '../../images/carbon_knight.png'
import github from '../../images/github_logo.png'
import heroku from '../../images/heroku_logo.png'

class Projects extends Component {
    render() {
        return (
            <fragment>
                <Container>
                    <Segment>
                        <PackSmart />
                    </Segment>
                    <Segment>
                        <CarbonKnight />
                    </Segment>
                </Container>
            </fragment>
        )
    }
}
  
function PackSmart() {
    return (
        <Grid columns={2} relaxed='very'>
            <Grid.Column>
                <Image src={pack_smart} />
            </Grid.Column>
            <Grid.Column>
                <h1>
                    Pack Smart
                    <Image floated="right" src={github} size='mini' href="https://github.com/Pack-Smart/pack-smart-be" target='_blank' />
                    <Image floated="right"src={heroku} size='mini' href="https://packsmart.herokuapp.com/" target='_blank' />
                </h1>

                <Divider clearing/>

                <p>
                Pack Smart is a site that helps users pack for trips by giving them suggestions on items they might need for that trip based on a small survey.
                <Divider hidden />
                <b>Technologies used:</b> Python, Flask, SQLAlchemy, pytest, PostgreSQL, Heroku, Travis
                </p>
            </Grid.Column>
        </Grid>
    )
}

function CarbonKnight() {
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
            <Grid.Column>
                <Image src={carbon_knight} />
            </Grid.Column>
        </Grid>
    )
}

export default Projects