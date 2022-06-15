import React from 'react';
import RMDBLogoimg from '../images/react-movie-logo.svg';
import TMDBLogoimg  from '../images/tmdb_logo.svg';
import { Wrapper, Content, Logo, TMDBLogo } from './Componets_Styles/header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Logo src = {RMDBLogoimg} alt='rmdb-logo' />
            <TMDBLogo src= {TMDBLogoimg} alt = 'tmdb-logo' />
        </Content>
    </Wrapper>
)

export default Header