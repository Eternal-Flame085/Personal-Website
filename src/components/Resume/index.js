import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

const Resume = () => {
    return (
        <Container style={{ height: '90vh', width:'60%' }}>
            <Embed
                style={{ height: '95%' }}
                defaultActive 
                url='https://drive.google.com/file/d/13VinKVdl-NGzquZlhmRsQCdYJzHGEUFW/preview'
            />
        </Container>
    )
}

export default Resume