import React, { Component } from 'react';
import { Container, Segment} from 'semantic-ui-react'

import PackSmart from './pack_smart/pack_smart'
import CarbonKnight from './carbon_knight/carbon_knight'

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

export default Projects