import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { Content, Header, Layout, Section } from '../components';
import { SEO } from '../components/base/SEO';
import { TitoSession, useTito } from '../hooks/useTito';
import config from '../config';
import spacetime from 'spacetime';
import styled from 'styled-components';
import NiceModal from '@ebay/nice-modal-react';
import { SpeakerModal } from './speaker';

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


export default (props: { pageContext: { session: TitoSession, socialImage: string, slug: string; } }) => {
    const { speakers, rooms } = useTito();
    const findRoomById = (id: number) => {
        return rooms.find((s) => s.id === id);
    };
    const findSpeakerById = (id: string) => {
        return speakers.find((s) => s.id === id);
    };
    const { session, socialImage, slug } = props.pageContext;
    const startTime = spacetime(session.startsAt).goto(config.defaultTimezone.value).format('nice-full');
    return (
        <NiceModal.Provider>
            <Layout>
                <SEO
                    path={`/${slug}`}
                    title={session.title}
                    description={session.description}
                    image={socialImage}
                />
                <Section>
                    <Container>
                        <Header>
                            <h1 className="font__caesar size__h1">{session.title}</h1>
                            <br />
                            <TalkDetailRow>
                                {startTime} | {findRoomById(session.roomId)?.name} room
                            </TalkDetailRow>
                        </Header>
                        <Content>
                            {session.description}
                        </Content>
                        <Content>
                            <br />
                            {session.speakers.map((id) => {
                                const speaker = findSpeakerById(id);
                                return <a href={'#'} onClick={(e) => {
                                    e.preventDefault();
                                    NiceModal.show(SpeakerModal, { speaker, noSession: true });
                                }}><TalkDetailRow>
                                        <div><img src={speaker?.profilePicture} alt={speaker?.fullName} /></div>
                                        <div><span>{speaker?.fullName}</span>
                                            {speaker?.tagLine}
                                        </div>
                                    </TalkDetailRow>

                                </a>
                            })}
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
        </NiceModal.Provider>
    );
};
