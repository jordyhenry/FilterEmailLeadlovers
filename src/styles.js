import styled, { createGlobalStyle } from 'styled-components';
import { Container } from '@material-ui/core';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, 
  body {
    margin: 0;
    padding: 0;
    background: #fefefe;
  }
`

export const StyledContainer = styled(Container)`
  background: #fff;
  margin: 10px;
  padding: 10px;
  overflow: auto;

  -webkit-box-shadow: 0px 0px 70px -17px rgba(99,99,99,0.6);
  -moz-box-shadow: 0px 0px 70px -17px rgba(99,99,99,0.6);
  box-shadow: 0px 0px 70px -17px rgba(99,99,99,0.6);
`;


