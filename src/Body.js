import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
background-color: white;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
color: #000000;
`;

const TextDiv = styled.div`
display: inline-block; text-align: left;
`;

const IntroDiv = styled.div`
margin-bottom: 40px;
`;

const ProjectDiv = styled.div`
margin-bottom: 40px;
`;

const ContactDiv = styled.div`
margin-bottom: 40px;
`;

class MainSection extends Component {
    render() {
        return (
            <MainDiv>
            <TextDiv>
            <IntroDiv>
            <h2> Introduction </h2>
            Hi, my name is Chun-Wei Chen and I am a Mathematics and Computing
            Science Joint Major at Simon Fraser University.
            </IntroDiv>
            <ProjectDiv>
            <h2> Current Project </h2>
            I am working on a web automation framework that is written in Java
            and uses Selenium. <br />
            More of my projects are located on my&nbsp;
            <a href="https://github.com/Chun-WeiChen">GitHub</a> page.
            </ProjectDiv>
            <ContactDiv>
            <h2> Contact Information </h2>
            For any inquiries or requests please email chun1995@live.ca.
            </ContactDiv>
            </TextDiv>
            </MainDiv>
        );
    }
}

export default MainSection;
