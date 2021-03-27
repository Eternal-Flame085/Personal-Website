import React from 'react';
import { Container, Segment, Divider, Image, Header, Grid } from 'semantic-ui-react';

import Turing from './images/Turing.png'
import Rinconcito from './images/MiRinconcitoMexicano.png'

const Experience = () => {
    return (
        <Container>
            <Segment raised style={{ backgroundColor:'#ffffffCC' }}>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column verticalAlign='middle'>
                        <Header as='h1' content='Turing School of Software & Design'/>

                        <Divider/>

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
                        <Image size='medium' centered src={Turing} />
                    </Grid.Column>
                </Grid>
            </Segment>

            <Segment raised style={{ backgroundColor:'#ffffffCC' }}>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column verticalAlign='center'>
                        <Image style={{ width:'100%', height:300}} centered src={Rinconcito} />
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Header as='h1' content='Mi Rinconcito Mexicano' floated='left' />
                        <Header as='h1' content='(2015-2019)' floated='right' />

                        <Divider clearing/>

                        <p>
                            I started working at Mi Rinconcito Mexicano when I was sixteen, and it was my first part-time job
                            that I took to help pay for college. During the four and a half years working there I learned 
                            and experienced a wide variety of things. 
                        </p>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    )
}

export default Experience