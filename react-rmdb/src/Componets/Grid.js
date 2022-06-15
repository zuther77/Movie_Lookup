import React from 'react';
import { Wrapper, Content } from './Componets_Styles/grid.styles';

const Grid = (prop) => {
    return (
        <Wrapper>
            <h1>{prop.header}</h1>
            <Content> {prop.children} </Content>
        </Wrapper>
    )
}



export default Grid