import { reset } from './Reset';
import config from '../config';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 ${reset}
  * {
    font-family: ${config.bodyFontFamily}, Tahoma, Verdana, sans-serif;
  }
   @keyframes fadein { 0% { opacity: 0 }}
  
  a {
    color: ${(props) => props.theme.colors.logoLightBlue}
  }

`;

export { GlobalStyle };
