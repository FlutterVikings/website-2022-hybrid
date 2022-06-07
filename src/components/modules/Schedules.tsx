import React, { useEffect, useState } from 'react';
import { Container, MainTitle, Section } from '../common';
import config from '../../config';
import spacetime from 'spacetime';

// @ts-ignore
import TimezoneSelect from 'react-timezone-select';

import styled from 'styled-components';
import { Link } from 'gatsby';
import { Timezone } from '../../models/Timezone';
import { TitoSession, TitoSpeaker, useTito } from '../../hooks/useTito';
import { FaceImage } from '../common/FaceImage';

interface Props {
  session: TitoSession;
  selectedTimezone: string;
  speakers: TitoSpeaker[];
}

const ProgramSection = ({ session, selectedTimezone, speakers }: Props) => {
  // Event--ligthningTalk
  const startTime = spacetime(session.startsAt).goto(selectedTimezone).time();
  const endsTime = spacetime(session.endsAt).goto(selectedTimezone).time();
  return (
    <>
      <div
        key={session.id}
        className={`Event${session.speakers.length > 0 ? ' Event--talk' : ''}${
          session.isServiceSession ? ' Event--lunch' : ''
        }`}
      >
        <div className="Event-time">
          {startTime} - {endsTime}
        </div>
        <div className="Event-details">
          <span className="Event-name">{session.title}</span>
          {session.speakers.length > 0 && (
            <>
              {/* <AddToCal
                startsAt={timezoneBasedStartTime
                  .goto(timezoneValue)
                  .format('iso')
                  .toString()}
                endsAt={timezoneBasedEndTime.goto(timezoneValue).format('iso').toString()}
                location={timezoneValue}
                title={`${speaker?.talk?.title} by ${speaker?.name}` || title}
                desc={`${speaker?.talk?.description} https://flutterVikings.com` || ''}
              /> */}
              {session.speakers.map((speakrId) => {
                const presenter = speakers.filter((sp) => sp.id === speakrId)[0];
                return (
                  <div key={presenter.id}>
                    <Link to={`/speakers/${presenter.id}`} className="SpeakerInformation">
                      <div className="SpeakerInformation-pictureWrapper">
                        <FaceImage member={presenter} withFilter={false} />
                      </div>
                      <div className="SpeakerInformation-name">{presenter.fullName}</div>
                    </Link>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
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
  const { speakers, sessions, rooms, categories } = useTito();
  const today = spacetime.now().format('mm/yy').toString();
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [selectedTab, setSelectedTab] = useState<string | null>('2022-08-31');
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(24847);
  const timezone: Timezone = {
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    label: Intl.DateTimeFormat().resolvedOptions().timeZone,
    altName: Intl.DateTimeFormat().resolvedOptions().timeZone,
    abbrev: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>(
    config.defaultTimezone,
  );

  const setTab = (day: string) => () => {
    setSelectedDay(day);
    setSelectedTab(day);
  };
  const setRoomTab = (room: number) => () => setSelectedRoomId(room);
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

  const agenda = sessions.reduce<{
    [day: string]: {
      [roomId: number]: TitoSession[];
    };
  }>((acc, session) => {
    const day = session.startsAt.split('T')[0];
    if (acc[day]) {
      if (acc[day][session.roomId]) {
        acc[day][session.roomId] = [...acc[day][session.roomId], session];
      } else {
        acc[day][session.roomId] = [session];
      }
    } else {
      acc[day] = {
        [session.roomId]: [session],
      };
    }
    return acc;
  }, {});

  const roomName = rooms.find((room) => room.id === selectedRoomId)?.name;

  return (
    <>
      <Section>
        <Container id="agenda">
          <MainTitle title="Event Agenda" titleStrokeText={'Schedule'} />
          <Notice>
            <p>The schedule time is based on Europe/Oslo (CEST) timezone.</p>
            <br />
            {/* <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} /> */}
          </Notice>
          <Notice>
            <h3 className="text-center">Days</h3>
          </Notice>
          <div className="Agenda-twoColumnContainer">
            {Object.keys(agenda).map((agendaDay) => (
              <AgendaTabButton
                selected={agendaDay === selectedDay || agendaDay === selectedTab}
                className="Agenda-columnTitle"
                key={agendaDay}
                onClick={setTab(agendaDay)}
              >
                <p className="Agenda-day">{agendaDay}</p>
                <p className="Agenda-date">{spacetime(agendaDay).format('day')}</p>
                {(agendaDay === selectedDay || agendaDay === selectedTab) && (
                  <CheckMark />
                )}
              </AgendaTabButton>
            ))}
          </div>
          {selectedTab && selectedDay && (
            <>
              <br />
              <br />
              <Notice>
                <h3 className="text-center">Rooms</h3>
              </Notice>
              <div className="Agenda-twoColumnContainer">
                {rooms.map((room) => (
                  <AgendaTabButton
                    selected={room.id === selectedRoomId}
                    className="Agenda-columnTitle"
                    key={room.id}
                    onClick={setRoomTab(room.id)}
                  >
                    <p className="Agenda-day">{room.name}</p>
                    {room.id === selectedRoomId && <CheckMark />}
                  </AgendaTabButton>
                ))}
              </div>
            </>
          )}
          {roomName && selectedDay && selectedRoomId && (
            <>
              <div className="Agenda-twoColumnContainer">
                <div className="Agenda-column Agenda-column">
                  <Notice>
                    <h3 className="text-center">{roomName}</h3>
                    <p>{spacetime(selectedDay).format('day')}</p>
                  </Notice>
                  {selectedTab
                    ? agenda[selectedTab][selectedRoomId].map((session) => (
                        <ProgramSection
                          key={session.id}
                          session={session}
                          selectedTimezone={selectedTimezone.value}
                          speakers={speakers}
                        />
                      ))
                    : agenda[selectedDay][selectedRoomId].map((session) => (
                        <ProgramSection
                          key={session.id}
                          session={session}
                          selectedTimezone={selectedTimezone.value}
                          speakers={speakers}
                        />
                      ))}
                </div>
              </div>
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export { Schedules };
