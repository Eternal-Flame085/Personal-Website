import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

import ResumePDF from './RobertoBasultoResume.pdf'

const Resume = () => {
    return (
        <Container style={{ height: '90vh', width:'60%' }}>
            <Embed
                style={{ height: '95%' }}
                defaultActive 
                url={ResumePDF}
            />
        </Container>
    )
}

export default Resume