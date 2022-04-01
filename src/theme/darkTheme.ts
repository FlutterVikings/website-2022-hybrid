import { transitions, fontSize, fontFamily } from './common';

const darkTheme = {
  isDark: true,
  colors: {
    primary: '#055799', // Color for buttons or links
    bg: '#212937', // Background color
    sectionbg: '#212937', // Background color
    logoDarkBlue: '#055799',
    logoDarkBlueRgba: 'rgba(5, 87, 153, 1)',
    logoLightBlue: '#07C6F9',
    logoLightBlueRgba: 'rgba(7, 198, 249, 1)',
    white: '#fff',
    black: '#000',
    grey: {
      dark: 'rgba(255,255,255, 0.9)',
      default: 'rgba(255,255,255, 0.7)',
      light: 'rgba(255,255,255, 0.5)',
      ultraLight: 'rgba(255,255,255, 0.15)',
    },
    sectionHighLight: 'rgba(0, 0, 0, 0.9)',
  },
  fontFamily,
  transitions,
  fontSize,
};

export { darkTheme };
