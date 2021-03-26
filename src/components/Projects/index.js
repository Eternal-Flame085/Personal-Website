import React from 'react';
import { Container, Segment} from 'semantic-ui-react'

import PackSmart from './pack_smart'
import CarbonKnight from './carbon_knight'

const Projects = () => {
    return (
        <fragment>
            <Container style={{ 
                paddingBottom: '3%', 
                margin: 0, 
                position: 'absolute', 
                top:'50%', 
                left:'50%', 
                msTransform: 'translate(-50%, -50%)', 
                transform: 'translate(-50%, -50%)'
            }}>
                <Segment raised style={{ backgroundColor:'#ffffffCC' }}>
                    <PackSmart />
                </Segment>
                <Segment raised style={{ backgroundColor:'#ffffffCC' }}>
                    <CarbonKnight />
                </Segment>
            </Container>
        </fragment>
    )
}

export default Projects