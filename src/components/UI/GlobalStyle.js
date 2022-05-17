import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    font-size: 62.5%;
	font-family: -apple-system, sans-serif;
  }
  
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  
  body {  
    background-color: #E2CADF;
    font-size: 1.5rem;
  }
  
  :root {
    --main-bg-color: #E2CADF;
    --main-bg-color-dark: #4B587F;
    --text-color-light: #ffffff;
    --text-color-dark: #4B587F;
    --button-bg-color: #DB6C4C;
      }



`;

export default GlobalStyle;
