import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 

:root {
  --yellow: #ffcc29;
  --blue: #1d539e;
  --gray: #828799;
  --page-background: #f9fbfc;
}


  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background-color: var(--page-background);
    font-family: sans-serif;
  }


  html{
         @media  (max-width:1080px) {
             font-size:93.75%;
         }

         @media (max-width:720px) {
             font-size: 8
         }}

        
    
` ;
export default GlobalStyle;
