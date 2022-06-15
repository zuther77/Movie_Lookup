import React from 'react';
import { Wrapper, Content, Text } from './Componets_Styles/heroimg.styles';


const HeroImage = (prop) => (
    <Wrapper image = {prop.image} >
        <Content>
            <Text>
                <h1> {prop.title} </h1>
                <p> {prop.text} </p>
            </Text>
        </Content>
    </Wrapper>
)


export default HeroImage