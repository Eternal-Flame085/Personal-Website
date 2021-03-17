import React, { Component } from 'react';
import { Container, Segment} from 'semantic-ui-react'

import PackSmart from './pack_smart'
import CarbonKnight from './carbon_knight'

const Projects = () => {
    return (
        <fragment>
            <Container style={{ paddingTop:20 }}>
                <Segment raised>
                    <PackSmart />
                </Segment>
                <Segment raised>
                    <CarbonKnight />
                </Segment>
            </Container>
        </fragment>
    )
}

export default Projects