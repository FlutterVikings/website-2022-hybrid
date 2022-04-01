import { transitions, fontSize, fontFamily } from './common';

const lightTheme = {
  isDark: false,
  colors: {
    primary: '#07C6F9', // Color for buttons or links
    bg: '#DEFEF0', // Background color
    logoDarkBlue: '#055799',
    logoDarkBlueRgba: 'rgba(5, 87, 153, 1)',
    logoLightBlue: '#07C6F9',
    logoLightBlueRgba: 'rgba(7, 198, 249, 1)',
    sectionbg: '#fff',
    white: '#fff',
    black: '#000',
    grey: {
      dark: 'rgba(0, 0, 0, 0.9)',
      default: 'rgba(0, 0, 0, 0.7)',
      light: 'rgba(0, 0, 0, 0.5)',
      ultraLight: 'rgba(0, 0, 0, 0.15)',
    },
    sectionHighLight: '#f1f1f1',
  },
  fontFamily,
  transitions,
  fontSize,
};

export { lightTheme };
