import React from 'react';
import { Content, Header, Layout, Wrapper } from '../components';
import config from '../config';
import { Link } from 'gatsby';
import { SEO } from '../components/base/SEO';

export default () => {
  return (
    <Layout>
      <Wrapper>
        <SEO title={`404 not found | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Content>
      </Wrapper>
    </Layout>
  );
};
