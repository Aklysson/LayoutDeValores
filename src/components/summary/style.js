import styled from 'styled-components';

export const Container = styled.div`

width: 19rem;
display: flex;
flex-direction: column;
gap: 1rem;
background-color: var(--page-background);
border-radius: 5%;
padding: 1rem;
height: 15rem;

:hover{
    background: linear-gradient(var(--yellow), var(--page-background));
    cursor: pointer;
    transform: scale(1.1);
    ;}

h4{
    margin-bottom: 1rem;
}
`