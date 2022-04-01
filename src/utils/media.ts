export const sizes = {
  xxl: 1540,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 575,
};

export const device = {
  // Small devices (landscape phones, 576px and up)
  phone: `(min-width: ${sizes.sm}px)`,
  // Medium devices (tablets, 768px and up)
  tablet: `(min-width: ${sizes.md}px)`,
  // Large devices (desktops, 992px and up)
  laptop: `(min-width: ${sizes.lg}px)`,
  // Large devices (desktops, 992px and up)
  desktop: `(min-width: ${sizes.xl}px)`,
  // Large devices (desktops, 992px and up)
  xxl: `(min-width: ${sizes.xxl}px)`,
};
