import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Content, Layout, Section } from '../components';
import { SEO } from '../components/base/SEO';
import { useActivities } from '../hooks/useActivities';

const ActivityRow = styled.div`
  display: flex;
`;

const ActivityDivider = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 100%;
  height: 1px;
  background: #ccc;
`;


const SmallHeader = styled.header`
  position: relative;
  padding: 2rem 0;
  text-align: center;
  font-size: 32px;
`;


export default () => {
  const activities = useActivities();
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
                <div className="entry-contest">
                  <p>
                    As an hybrid conference, we know that it's important to go the extra
                    mile to keep our attendees interested and engaged. That's why we have
                    a host of live activities and contests running throughout the
                    conference lined up.
                  </p>
                  <br />
                  <p><strong>Important:</strong> You need to make sure you have a valid ticket, the booking reference is required to attend</p>
                  <br />
                  <SmallHeader className="font__caesar size__h1">
                    Prizes and Gifts!
                  </SmallHeader>
                  <p>
                    Why should you participate 🤔 ? Well, we hope that they will be fun
                    and that maybe you will learn something new about Flutter while
                    participating. However, we also have some more concrete incentives
                    lined up... Prizes!!!
                  </p>
                  <p>
                    Here are the prizes that will be awarded:
                  </p>
                  <br />
                  <ul>
                    <li>Flutter Apprentice book vouchers</li>
                    <li>Dart Apprentice book vouchers</li>
                    <li>Google Nest Hub 2</li>
                    <li>Nintendo Switch</li>
                    <li>Conference bag including socks, mugs, tshirt and stickers</li>
                    <li>Codemagic Voucher</li>
                    <li>Dash the bird!!! (10)</li>
                    <li>FlutterVikings T-Shirt</li>
                    <li>FlutterVikings Mug</li>
                    <li>PacktPub books voucher</li>
                    <li>Apple TV</li>
                    <li>Gaming Headsets and Keyboard</li>
                    <li>VR Headset</li>
                    <li>Google Nest mini</li>
                    <li>And more..</li>
                  </ul>
                </div>
                <br />
              </ActivityRow>
              <Content>
                {activities.map((activity, i) => {

                  return <div>
                    <h3>{i + 1}- {activity.title}</h3>
                    <p>{activity.intro} | <a href={activity.url} target="_blank" rel="noopener noreferrer nofollow">Read more</a></p>
                    <ActivityDivider></ActivityDivider>
                  </div>
                })}
              </Content>
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
