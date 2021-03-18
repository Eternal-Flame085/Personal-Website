import React from 'react'
import { Container, Embed } from 'semantic-ui-react'

const Resume = () => {
    return (
        <Container style={{height: '100vh'}}>
            <Embed
                style={{height: '100vh'}}
                defaultActive 
                url='https://drive.google.com/file/d/13VinKVdl-NGzquZlhmRsQCdYJzHGEUFW/preview'
            />
        </Container>
    )
}

export default Resume