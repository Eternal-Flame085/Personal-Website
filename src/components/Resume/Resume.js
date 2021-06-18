import React from 'react';
import Container from '@material-ui/core/Container';

import ResumePDF from './Roberto_Basulto_Resume.pdf'

const Resume = () => {
    return (
        <Container style={{ height: '90vh', width:'60%' }}>
            <iframe src={ResumePDF} width="100%" height="100%" allow="autoplay"></iframe>
        </Container>
    )
}

export default Resume