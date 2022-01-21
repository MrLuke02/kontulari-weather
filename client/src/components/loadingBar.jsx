import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const LoadingBar = (props) => {
    return <Container><Spinner
        color="light"
    >
        Loading...
    </Spinner></Container>
}


const Container = styled.div`
margin-top: 10%;
`

export default LoadingBar;

