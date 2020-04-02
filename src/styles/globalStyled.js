import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
  }
  input, button {
    font-family: 'Open Sans', sans-serif;
  }
  ul li{
    list-style: none;
  }
`;
