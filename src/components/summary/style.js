import styled from 'styled-components';

export const Container = styled.div`

width: 19rem;
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #ffffff;
border-radius: 5%;
padding: 1rem;
height: 15rem;

:hover{
    background: linear-gradient(var(--yellow), var(--page-background));
    cursor: pointer;
    height:16rem;
    width: 20rem;
    margin-top: -1rem;}

h4{
    margin-bottom: 1rem;
}
`