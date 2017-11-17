import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Introduction from './Introduction.js'
import Body from './Body.js'

const AppContainer = styled.div`
height: 200%;
display: flex;
flex-direction: column;
`;

class App extends Component {
    render() {
        return (
            <AppContainer>
            <Introduction />
            <Body />
            </AppContainer>
        );
    }
}

export default App;
