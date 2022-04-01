export interface VikingTheme {
  isDark: boolean;
  colors: {
    primary: string;
    bg: string;
    sectionbg: string;
    logoDarkBlue: string;
    logoDarkBlueRgba: string;
    logoLightBlue: string;
    logoLightBlueRgba: string;
    white: string;
    black: string;
    sectionHighLight: string;
    grey: {
      dark: string;
      default: string;
      light: string;
      ultraLight: string;
    };
  };
  fontFamily: {
    headerFontFamily: string;
    bodyFontFamily: string;
  };
  transitions: {
    normal: string;
  };
  fontSize: {
    small: string;
    base: string;
    medium: string;
    big: string;
    xxl: string;
    xxxl: string;
  };
}
