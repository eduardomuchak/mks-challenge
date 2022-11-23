import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {   
    background-color: #e5e5e5;
    font-family: 'Montserrat', sans-serif;
  }

  ::-webkit-scrollbar {
  width: 10px;
  }

  ::-webkit-scrollbar-thumb {
  background-color: #dcdcdc;
  border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #EDF2F7;
    border-radius: 5px;
  }
`;
