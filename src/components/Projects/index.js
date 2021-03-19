import React from 'react';
import { Container, Segment} from 'semantic-ui-react'

import PackSmart from './pack_smart'
import CarbonKnight from './carbon_knight'

const Projects = () => {
    return (
        <fragment>
            <Container style={{ paddingTop:20, height: '100vh' }}>
                <Segment raised>
                    <PackSmart />
                </Segment>
                <Segment raised style={{ backgroundColor:'#ffffff80' }}>
                    <CarbonKnight />
                </Segment>
            </Container>
        </fragment>
    )
}

export default Projects