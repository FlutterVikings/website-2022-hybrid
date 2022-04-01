import { useStaticQuery, graphql } from 'gatsby';
import { Agenda, Program } from '../models/Agenda';
import { Speaker } from '../models/Speaker';

export const useAgenda = (speakers: Speaker[]): Agenda[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allAgendaJson {
        edges {
          node {
            name
            date
            dateISO
            tracks {
              name
              programs {
                title
                startTime
                endTime
                isActivity
                speaker
                speakers
                winnerTime
              }
            }
          }
        }
      }
    }
  `);

  const SpeakerEntities = speakers.reduce(
    (acc: { [key: string]: Speaker }, speaker: Speaker) => {
      acc[speaker.id] = speaker;
      return acc;
    },
    {},
  );
  return items.edges
    .map((sp: any) => sp.node)
    .map((sp: Agenda) => {
      const tracks = sp.tracks.map((track) => {
        const agendaWithSpeaker = track.programs.map((p: Program) => {
          if (p.speaker) {
            return {
              ...p,
              speaker: SpeakerEntities[`${p.speaker}`],
            };
          }
          if (p.speakers) {
            const presentors = p.speakers.map(
              (speakerId) => SpeakerEntities[`${speakerId}`],
            );
            return {
              ...p,
              speakers: presentors,
            };
          }
          return p;
        });
        return {
          ...track,
          programs: agendaWithSpeaker,
        };
      });
      return {
        ...sp,
        tracks,
      };
    });
};
