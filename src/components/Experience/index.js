import React from 'react';
import { Container, Segment, Divider, Image, Header, Grid } from 'semantic-ui-react';

import Turing from './images/Turing.png'

const Experience = () => {
    return (
        <Container>
            <Segment raised style={{ backgroundColor:'#ffffffCC' }}>
                <Grid columns={2} relaxed='very'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h1' content='Turing School of Software & Design'/>

                        <Divider clearing/>

                        <p>
                            While I was in college, I was exposed to C++ and Java while studying for game development.
                            Not being to fond of the Art courses I was forced to take, I was introduced to Turing and 
                            one month later I was enrolled in their back-end program. This is a seven month, full-time
                            coding bootcamp. On average, I'd spend 70+ hours a week attending class, taking notes,
                            practicing code challenges, and working on constantly changing projects some written 
                            with a different language. I was a hard and stressful seven months but it has been the
                            most rewarding journey I have taken so far. I've made some great friends in my cohort along
                            the way and i am looking forward to what comes next.
                        </p>
                    </Grid.Column>

                    <Grid.Column>
                        <Image size="medium" centered src={Turing} />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}

export default Experience