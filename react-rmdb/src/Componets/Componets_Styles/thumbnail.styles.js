import styled from "styled-components";


export const Image = styled.img`
    border-radius: 15px;
    width: 100%;
    max-width: 720px;
    object-fill: cover;
    animation: animateThumbnail 1s;

    :hover{
        opacity: 0.8;
    }


    @keyframes animateHeroImage {
        from { opacity: 0 ;}
        to { opacity: 1;}
    }


`;


