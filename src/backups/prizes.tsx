import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content, MainTitle } from '../components';

const SmallHeader = styled.header`
  position: relative;
  padding: 2rem 2rem 2rem;
  text-align: center;
  color: white;
`;

const SmallLink = styled.a`
  color: white;
  font-weight: bold;
`;

export default () => {
  return (
    <>
      <Layout>
        <Section>
          <Container>
            <SmallHeader className="font__caesar size__h1">Prizes!</SmallHeader>

            <Content>
              <p>
                As an online conference, we know that it's important to go the extra mile
                to keep our attendees interested and engaged.
              </p>
              <br />
              <p>
                That's why we have a host of live activities and contests running through
                the conference lined up. You can read more about them here:
                <SmallLink href="/Activities">Activities</SmallLink>
              </p>
              <br />
              <p>
                {' '}
                Why should you do participate? Well, we hope that they will be fun and
                that maybe you will learn something new about Flutter while participating.
                However, we also have some more concrete incentives lined up... Prizes!!!
              </p>
              <br />
              <p>
                {' '}
                So, here is a list of the prizes that will be given out throughout the
                conference for contest and quiz winners.
              </p>
              <ul>
                <li>Udemy voucher</li>
                <li>Codemagic Voucher for $2000 USD</li>
                <li>AppCircle Voucher + FREE account</li>
                <li>2500 Euro by The@Company (distributed to multiple winners)</li>
                <li>Dash the bird (10) </li>
                <li>T-Shirt (FlutterVikings/Community/Flutter)</li>
                <li>Flutter full reference book (Ebook and paper copy)</li>
                <li>Flutter in Action Ebook and voucher for paper copy</li>
                <li>Stream contest prize (cash + swag)</li>
              </ul>

              <br />
              <br />
              <br />
              <div className="CTA-actions" style={{ textAlign: 'center' }}>
                <Link className="Btn Btn--ticket Btn--cta" to="/">
                  Back to homepage
                </Link>
              </div>
              <br />
              <br />
              <br />
            </Content>
          </Container>
        </Section>
      </Layout>
    </>
  );
};
