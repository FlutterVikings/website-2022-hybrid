import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Content, Layout, Section } from '../components';
import ScrollIntoView from 'react-scroll-into-view';
import { SEO } from '../components/base/SEO';

const ActivityRow = styled.div`
  display: flex;
`;

const SimpleClickToTweet = styled.div`
  display: block;
  position: relative;
  text-align: center;
  border-style: solid;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 15px 30px;
  margin: 15px 0px;
`;

const TwitterLogoLink = styled.a`
  margin: 0;
  padding: 0;
  position: center;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #ffffff;
  padding-right: 24px;
  text-decoration: none;
  background: transparent url(/assets/Twitter_Social_Icon_Circle_Color.svg) no-repeat
    right top;
`;

const ActivityDivider = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const TableContentItem = styled.b`
  padding: 1rem 0;
  cursor: pointer;
`;

const SmallHeader = styled.header`
  position: relative;
  padding: 2rem 0;
  text-align: center;
  font-size: 32px;
`;

const VerySmallHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 18px;
`;

export default () => {
  return (
    <>
      <Layout>
        <SEO title="FlutterVikings activities - Win a Dash or other prizes" />
        <Section>
          <Container>
            <Content>
              <SmallHeader>
                <h1 className="font__caesar size__h1">Activities & Prizes</h1>
              </SmallHeader>
              <ActivityRow>
                <h3>Announcing soon</h3>
              </ActivityRow>
              <br />
              <br />
              <div className="CTA-actions" style={{ textAlign: 'center' }}>
                <Link className="Btn Btn--ticket Btn--cta" to="/">
                  Back to homepage
                </Link>
              </div>
            </Content>
          </Container>
        </Section>
      </Layout>
    </>
  );
};
