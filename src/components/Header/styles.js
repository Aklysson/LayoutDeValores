import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--blue);
    height: 20rem;


    h1{
        display: flex;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: -3rem;

    }

    p{
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 3rem;
 flex-wrap: wrap;
 font-weight: 400    }

 p, h1, h2, h3, h4, h5, h6, strong {
        color: #f9fbfc; }
`;