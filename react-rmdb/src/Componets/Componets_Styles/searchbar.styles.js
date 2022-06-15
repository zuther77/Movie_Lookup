import styled from 'styled-components';


export const Wrappper = styled.div`
    background: var(--darkGrey);    
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 100px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    position: relative;
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    border-radius: 40px;
    marign-top: 0;
    color: var(--white);

    img{
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input{
        
        border-radius: 40px;
        border: 2px solid var(--lightGrey)
        font-size: 28px;
        position: absolute;
        left: 0;
        margin: 8px;
        padding: 0 0 0 60px;
        width: 95%;
        height: 40px;
        background: transparent;
        color: var(--white);


        :focus{
            outline: none;
        }

    }




`;