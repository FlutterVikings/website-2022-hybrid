import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../config';

interface SEO {
  title?: string;
  description?: string;
  path?: string;
}

export const SEO = (props: SEO) => {
  const image = config.siteBanner;
  const title = props.title ? `${props.title} | ${config.siteTitle}` : config.siteTitle;
  const description = props.description ? props.description : config.siteDescription;
  const url = props.path
    ? config.siteUrl + props.path
    : config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': url,
      url,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta
        property="og:site_name"
        content={config.ogSiteName ? config.ogSiteName : ''}
      />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
