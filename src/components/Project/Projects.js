import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Projects.css'

import pack_smart from '../../images/pack_smart.png'
import carbon_knight from '../../images/carbon_knight.png'
import github from '../../images/github_logo.png'
import heroku from '../../images/heroku_logo.png'

class Projects extends Component {
    render() {
        return (
            <fragment>
                <PackSmart />
                <CarbonKnight />
            </fragment>
        )
    }
}
  
function PackSmart() {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={pack_smart} alt="Pack Smart homepage" class="project_images" />
                </Col>
                <Col>
                    <h1>Pack Smart</h1>
                    <a href="https://github.com/Pack-Smart/pack-smart-be">
                        <img src={github} length="30" height="30"></img>
                    </a>
                    <a href="https://packsmart.herokuapp.com/">
                        <img src={heroku} length="30" height="30"></img>
                    </a>
                    <p>
                    Pack Smart is a site that helps users pack for trips by giving them suggestions on items they might need for that trip based on a small survey.

                    <br></br><br></br><b>Technologies used:</b> Python, Flask, SQLAlchemy, pytest, PostgreSQL, Heroku, Travis
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

function CarbonKnight() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>CarbonKnight</h1>
                    <a href="https://github.com/Carbon-Knight">
                        <img src={github} length="30" height="30"></img>
                    </a>
                    <a href="https://carbon-knight.herokuapp.com/">
                        <img src={heroku} length="30" height="30"></img>
                    </a>
                    <p>
                    CarbonKnight is an application where a user is able to input their travel data and see what their unique carbon footprint is over time.
                    <br></br><br></br><b>Technologies used:</b> Ruby, Rails, GraphQL, Active Record, PostgreSQL, Heroku, Travis
                    </p>
                </Col>
                <Col>
                    <img src={carbon_knight} alt="Carbon Knight homepage" class="project_images" />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects