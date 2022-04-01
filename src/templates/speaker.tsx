import { graphql, Link } from 'gatsby';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import React, { useState } from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Layout, Section, Header, Content } from '../components';
import { SEO } from '../components/base/SEO';
import { Agenda, Program } from '../models/Agenda';
import { Speaker } from '../models/Speaker';
import config from '../config';
import { Timezone } from '../models/Timezone';
import spacetime from 'spacetime';
// @ts-ignore
import TimezoneSelect from 'react-timezone-select';
import { AddToCal } from '../components/common/AddToCal';

const SpeakerRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpeakerImage = styled.div`
  flex: 1;
`;
const SpeakerInfo = styled.div`
  padding: 0 4rem;
  flex: 1;
`;

export default ({
  path,
  data,
}: {
  path: string;
  data: {
    agenda: Agenda;
    speaker: Speaker;
    image: { childImageSharp: { fluid: FluidObject } };
  };
}) => {
  const { speaker, image, agenda } = data;
  let speakerTimeSlot: Program;
  let timezoneValue = config.defaultTimezone.value;
  let timezoneBasedStartTime = spacetime.now(config.defaultTimezone.value);
  let timezoneBasedEndTime = spacetime.now(config.defaultTimezone.value);
  let spaceDate;
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(
    config.defaultTimezone,
  );
  if (agenda) {
    speakerTimeSlot = agenda.tracks
      .filter((track) => {
        return track.programs.find(
          (p: any) => p.speaker === speaker.id || p.speakers?.includes(speaker.id),
        );
      })[0]
      .programs.filter(
        (p: any) => p.speaker === speaker.id || p.speakers?.includes(speaker.id),
      )[0];
    timezoneValue = selectedTimezone.value;
    spaceDate = spacetime(agenda.dateISO, config.defaultTimezone.value);
    if (speakerTimeSlot) {
      timezoneBasedStartTime = spaceDate.time(speakerTimeSlot.startTime);
      timezoneBasedEndTime = spaceDate.time(speakerTimeSlot.endTime);
    }
  }
  return (
    <>
      <Layout>
        <Section>
          <SEO
            description={speaker.bio}
            path={path}
            title={speaker.name + ` Hybrid'22 Speaker `}
          />
          <Container id="speakers">
            <Header>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <img
                  alt="FlutterVikings"
                  className="SceneOverlay-logo"
                  src="/assets/logo.svg"
                />
              </div>
              <h1 className="font__caesar size__h1">{speaker.name}</h1>
            </Header>
            <Content>
              <SpeakerRow>
                <SpeakerImage>
                  <GatsbyImage fluid={image.childImageSharp.fluid} />
                  <br />
                  {agenda && speakerTimeSlot && (
                    <>
                      <p>
                        Time is based on {selectedTimezone.altName} (
                        {selectedTimezone.abbrev})
                      </p>
                      <br />
                      <TimezoneSelect
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                      <br />
                      <p>
                        Date:{' '}
                        <b>
                          {agenda.name}, {agenda.date}
                        </b>
                      </p>
                      <p>
                        Time:{' '}
                        <b>
                          {timezoneBasedStartTime?.goto(timezoneValue).time()} to{' '}
                          {timezoneBasedEndTime?.goto(timezoneValue).time()}
                        </b>
                      </p>
                      <br />
                      <AddToCal
                        startsAt={timezoneBasedStartTime
                          .goto(timezoneValue)
                          .format('iso')
                          .toString()}
                        endsAt={timezoneBasedEndTime
                          .goto(timezoneValue)
                          .format('iso')
                          .toString()}
                        location={timezoneValue}
                        title={
                          `${speaker?.talk?.title} by ${speaker?.name}` ||
                          speakerTimeSlot.title
                        }
                        desc={
                          `${speaker?.talk?.description} https://flutterVikings.com` || ''
                        }
                      />
                    </>
                  )}
                </SpeakerImage>
                <SpeakerInfo>
                  <p>
                    Name: <b>{speaker.name}</b>
                  </p>
                  {speaker.company && (
                    <p>
                      Company: <b>{speaker.company}</b>
                    </p>
                  )}
                  <br />
                  <h2 className="font__caesar">Talk</h2>
                  <br />
                  <p>
                    Title: <br />
                    <br />
                    <b>{speaker.talk.title}</b>
                  </p>
                  <br />
                  <p>
                    Abstract:
                    <br /> <br />{' '}
                    <b
                      dangerouslySetInnerHTML={{ __html: speaker.talk.description ?? '' }}
                    />
                  </p>
                </SpeakerInfo>
              </SpeakerRow>
              <SpeakerRow>
                <div>
                  <h3>Biography:</h3>
                  {speaker.bio}
                  <br />
                  <br />
                  {speaker.social.twitter && (
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href={speaker.social.twitter}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a rel="noopener noreferrer nofollow" href={speaker.social.linkedin}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {speaker.social.github && (
                    <a rel="noopener noreferrer nofollow" href={speaker.social.github}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </SpeakerRow>
              <br />
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

export const pageQuery = graphql`
  query($speakerId: String!) {
    agenda: agendaJson(
      tracks: { elemMatch: { programs: { elemMatch: { speaker: { eq: $speakerId } } } } }
    ) {
      name
      date
      dateISO
      tracks {
        name
        programs {
          startTime
          endTime
          speaker
        }
      }
    }

    image: file(name: { eq: $speakerId }, relativeDirectory: { eq: "speakers" }) {
      childImageSharp {
        fluid(
          maxWidth: 700
          maxHeight: 700
          quality: 100
          cropFocus: CENTER
          grayscale: true
        ) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    speaker: speakersJson(id: { eq: $speakerId }) {
      id
      name
      social {
        twitter
        github
        linkedin
      }
      talk {
        title
        description
        lightening
      }
      company
      title
      bio
    }
  }
`;
