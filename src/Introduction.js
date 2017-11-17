import React, { Component } from 'react';
import styled from 'styled-components';

const IntroDiv = styled.div`
background-image: url('./images/Background.JPG');
background-position: center;
background-size: 100% 100%;
background-repeat: no-repeat;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #ffffff;
`;

const Greeting = styled.text`
font-size: 60px;
font-style: bold;
`

const Icons = styled.text`
`

class Introduction extends Component {
    render() {
        return (
            <IntroDiv>
            <Greeting>
            Welcome!
            </Greeting>
            <Icons>
            <a href="https://github.com/Chun-WeiChen">
            <img src="./images/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png"
            alt="" height="32" hspace="8" />
            </a>
            <a href="https://www.linkedin.com/in/chun-wei-chen-a2004165/">
            <img src="./images/LinkedIn [in] for Screen/White/In-White-34px-TM.png"
            alt="" height="32" hspace="8" />
            </a>
            </Icons>
            </IntroDiv>
        );
    }
}

export default Introduction;
