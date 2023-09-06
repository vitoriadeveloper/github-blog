import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 input:focus{
       outline:0;
       box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
    }

    body {
        background-color: ${(props) => props.theme["base-background"]} ;
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        line-height: 160%;
      
    }

    a {
      text-decoration: none;
    }
    body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    }
`;
