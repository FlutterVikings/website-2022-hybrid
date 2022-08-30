import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Content, Header, Layout, Section } from '../components';
import { SEO } from '../components/base/SEO';
import styled from 'styled-components';
import NiceModal from '@ebay/nice-modal-react';
import { Activity } from '../models/Activity';

const TalkDetailRow = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    span {
        font-size: 90%;
        font-weight: 700;
    }
    img {
        padding: 1rem;
        border-radius: 50%;
        max-width: 10rem;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;


export default (props: { pageContext: { activity: Activity } }) => {
    const activity = props.pageContext.activity;
    return (
        <NiceModal.Provider>
            <Layout>
                <SEO
                    path={activity.url}
                    title={activity.title}
                    description={activity.intro}
                />
                <Section>
                    <Container>
                        <Header>
                            <h1 className="font__caesar size__h1">{activity.title}</h1>
                            <br />
                            <TalkDetailRow>
                                {activity.intro}
                            </TalkDetailRow>
                        </Header>
                        <Content >
                            <div dangerouslySetInnerHTML={{ __html: activity.content }} />
                        </Content>
                        <Content>
                            <br />
                            <div className="CTA-actions" style={{ textAlign: 'center' }}>
                                <Link className="Btn Btn--ticket Btn--cta" to="/activities">
                                    Back to activities page
                                </Link>
                                <a
                                    className="Btn Btn--ticket Btn--cta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://fluttervikings.com/ticket"
                                >
                                    Tickets
                                </a>
                            </div>

                        </Content>
                    </Container>
                </Section>
            </Layout>
        </NiceModal.Provider>
    );
};
