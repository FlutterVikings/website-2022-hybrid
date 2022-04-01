export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: 'FlutterVikings, The biggest Flutter Conference in Nordic', // Navigation and Site Title
  siteTitleAlt:
    'FlutterVikings is a two days two tracks in person and online Flutter/Dart conference ', // Alternative Site title for SEO
  siteUrl: 'https://fluttervikings.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: 'https://fluttervikings.com/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  ticketUrl: 'https://fluttervikings.com/ticket', // Domain of your site. No trailing slash!
  cfpUrl: 'https://fluttervikings.com/cfp', // Domain of your site. No trailing slash!
  twitterUrl: 'https://twitter.com/FlutterVikings', // Domain of your site. No trailing slash!
  youtubeUrl: 'https://bit.ly/3KV8bJH', // Domain of your site. No trailing slash!
  email: 'team@fluttervikings.com', // Domain of your site. No trailing slash!
  defaultBg: '/assets/bg.png', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription:
    'FlutterVikings is the biggest Flutter Conference in Nordic and a single track Flutter/Dart conference with talks by internationally renowned speakers and rising stars in the Flutter/Dart community', // Your site description
  author: 'Majid Hajian', // Author for schemaORGJSONLD
  siteLogo: '/assets/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@flutterVikings', // Twitter Username - Optional
  ogSiteName: 'FlutterVikings', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#07C6F9',
  backgroundColor: '#055799',

  // Settings for typography.ts
  headerFontFamily: 'Caesar Dressing',
  bodyFontFamily: 'Poppins',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-MFVN9Q8',
  defaultTimezone: {
    value: 'Europe/Amsterdam',
    label: '(GMT+1:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    altName: 'Central European Time',
    abbrev: 'CET',
  },
  POST_PER_PAGE: 4,
};
