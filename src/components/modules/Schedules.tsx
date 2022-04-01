import React, { useEffect, useState } from 'react';
import { useAgenda } from '../../hooks/useAgenda';
import { Container, MainTitle, Section } from '../common';
import config from '../../config';
import spacetime from 'spacetime';

// @ts-ignore
import TimezoneSelect from 'react-timezone-select';

import { Agenda, Track } from '../../models/Agenda';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { useSpeakers } from '../../hooks/useSpeakers';
import { useAllFiles } from '../../hooks/useAllFiles';
import { Link } from 'gatsby';
import { Timezone } from '../../models/Timezone';
import { AddToCal } from '../common/AddToCal';
import { fontSize } from '../../theme/common';

interface Props {
  agendaDay: Agenda;
  track: Track;
  selectedTimezone: Timezone;
}

const AgendaDay = ({ track, agendaDay, selectedTimezone }: Props) => {
  const { name, date, dateISO } = agendaDay;
  const { programs } = track;
  const timezoneValue = selectedTimezone.value;
  const spaceDate = spacetime(dateISO, config.defaultTimezone.value);

  return (
    <div className="Agenda-column Agenda-column">
      <div className="Agenda-columnTitle">
        <p className="Agenda-day">{track.name}</p>
        <p className="Agenda-date">{date}</p>
        <span className="Agenda-dash" />
      </div>
      {programs &&
        programs.map((program, i) => {
          const {
            title,
            startTime,
            endTime,
            speaker,
            isActivity,
            winnerTime,
            speakers,
          } = program;
          const timezoneBasedStartTime = spaceDate.time(startTime);
          const timezoneBasedEndTime = spaceDate.time(endTime);
          return (
            <div
              key={i}
              className={`Event${speaker || speakers ? ' Event--talk' : ''}${
                isActivity ? ' Event--lunch' : ''
              }${winnerTime ? ' Event--coffeeBreak' : ''}${
                speaker && speaker.talk?.lightening ? ' Event--ligthningTalk' : ''
              }`}
            >
              <div className="Event-time">
                {timezoneBasedStartTime.goto(timezoneValue).time()} -{' '}
                {timezoneBasedEndTime.goto(timezoneValue).time()}
              </div>
              <div className="Event-details">
                <span className="Event-name">{speaker?.talk?.title || title}</span>
                {speaker && (
                  <>
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
                      title={`${speaker?.talk?.title} by ${speaker?.name}` || title}
                      desc={
                        `${speaker?.talk?.description} https://flutterVikings.com` || ''
                      }
                    />

                    <Link to={`/speakers/${speaker.id}`} className="SpeakerInformation">
                      <div className="SpeakerInformation-pictureWrapper">
                        <GatsbyImage
                          className="SpeakerInformation-picture"
                          fixed={speaker.image.fixed}
                        />
                      </div>
                      <span className="SpeakerInformation-name">{speaker.name}</span>
                    </Link>
                    {speaker?.talk.coSpeaker && (
                      <Link
                        to={`/speakers/${speaker?.talk.coSpeaker.id}`}
                        className="SpeakerInformation"
                      >
                        <div className="SpeakerInformation-pictureWrapper">
                          <GatsbyImage
                            className="SpeakerInformation-picture"
                            fixed={speaker?.talk.coSpeaker.image.fixed}
                          />
                        </div>
                        <div className="SpeakerInformation-name">
                          {speaker?.talk.coSpeaker.name}
                        </div>
                      </Link>
                    )}
                  </>
                )}
                {speakers && (
                  <>
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
                      title={`${speaker?.talk?.title} by ${speaker?.name}` || title}
                      desc={
                        `${speaker?.talk?.description} https://flutterVikings.com` || ''
                      }
                    />
                    {speakers.map((presenter) => {
                      return (
                        <div key={presenter.id}>
                          <Link
                            to={`/speakers/${presenter.id}`}
                            className="SpeakerInformation"
                          >
                            <div className="SpeakerInformation-pictureWrapper">
                              <GatsbyImage
                                className="SpeakerInformation-picture"
                                fixed={presenter.image.fixed}
                              />
                            </div>
                            <div className="SpeakerInformation-name">
                              {presenter.name}
                              <div className="SpeakerInformation-talk">
                                {presenter.talk?.title}
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          );
        })}
      <div className="Event Event--space">
        <p className="Event-time" />
        <div className="Event-details">
          <span className="Event-name" />
        </div>
      </div>
      <div className="Agenda-columnFooter">
        <span className="Agenda-dash" />
      </div>
    </div>
  );
};

const CheckMark = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 24px;
  width: 12px;
  border-bottom: 7px solid ${(props) => props.theme.colors.logoLightBlue};
  border-right: 7px solid ${(props) => props.theme.colors.logoLightBlue};
  position: absolute;
  top: 5px;
  right: 10px;
`;

const AgendaTabButton = styled.button<{ selected?: boolean }>`
  margin: 5px;
  padding: 10px 25px;
  position: relative;
  cursor: pointer;
  border: 3px solid
    ${(props) =>
      props.selected
        ? props.theme.colors.logoLightBlue
        : props.theme.colors.logoDarkBlue};
  background: ${(props) => props.theme.colors.sectionbg};
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  width: 100%;
  :hover {
    transition: all 0.5 linear;
    border-color: ${(props) => props.theme.colors.logoLightBlue};
  }
`;

const Notice = styled.div`
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  text-align: center;
  padding: 3rem 0;
  font-size: 1.7rem;

  .css-2b097c-container,
  .css-yk16xz-control,
  .css-1pahdxg-control,
  .css-26l3qy-menu {
    background: ${(props) =>
      props.theme.isDark ? props.theme.colors.black : props.theme.colors.grey};
    text-align: left;
    :hover,
    :focus {
      border-color: ${(props) => props.theme.colors.logoLightBlue};
    }
  }
  .css-1uccc91-singleValue,
  .css-b8ldur-Input {
    color: ${(props) =>
      props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  }
`;

const Schedules = () => {
  const images = useAllFiles();
  const speakers = useSpeakers(images);
  const agenda = useAgenda(speakers);
  const [selectedTab, seTSelectedTab] = useState(1);
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(
    config.defaultTimezone,
  );

  const setTab = (index: number) => () => seTSelectedTab(index);
  const [now, setNow] = useState(spacetime.now());
  let interval: any;

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }
    // update time evert 1 min
    interval = setInterval(() => {
      setNow(spacetime.now());
    }, 1000 * 60);
  }, []);

  return (
    <>
      <Section>
        <Container id="agenda">
          <MainTitle title="Event Agenda" titleStrokeText={'Schedule'} />
          <Notice>
            {/* <p className="SceneOverlay-location">
              <a
                className="Btn Btn--ticket Btn--cta"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/playlist?list=PL4dBIh1xps-EXi7ZuOVRAg2MFDvjxQpR3"
              >
                Youtube
              </a>{' '}
              or
              <a
                className="Btn Btn--ticket Btn--cta"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitch.tv/FlutterCommunity"
              >
                Twitch
              </a>{' '}
              or
              <a
                className="Btn Btn--ticket Btn--cta"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/flutterVikings"
              >
                Twitter
              </a>
            </p> */}
            {/* <br /> */}
            <p>
              Your time now is {now.format('nice-full')} based on{' '}
              {selectedTimezone.altName} ({selectedTimezone.abbrev})
            </p>
            <br />
            <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
          </Notice>
          <div className="Agenda-twoColumnContainer">
            {agenda.map((agendaDay, i) => (
              <AgendaTabButton
                selected={i === selectedTab}
                className="Agenda-columnTitle"
                key={i}
                onClick={setTab(i)}
              >
                <p className="Agenda-day">{agendaDay.name}</p>
                <p className="Agenda-date">{agendaDay.date}</p>
                {i === selectedTab && <CheckMark />}
              </AgendaTabButton>
            ))}
          </div>
          <br />
          <br />
          <div className="Agenda-twoColumnContainer">
            {agenda.map(
              (agendaDay, i) =>
                i === selectedTab &&
                agendaDay.tracks.map((track, j) => (
                  <AgendaDay
                    key={i + j}
                    selectedTimezone={selectedTimezone}
                    agendaDay={agendaDay}
                    track={track}
                  />
                )),
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export { Schedules };
