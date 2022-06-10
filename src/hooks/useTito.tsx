import { useStaticQuery, graphql } from 'gatsby';

export interface TitoSpeakerLink {
  linkType: 'Twitter' | 'LinkedIn';
  url: string;
  title: string;
}

export type TitoSessionId = string;
export type TitoSpeakerId = string;
export type TitoCategoryId = number;
export type TitoRoomId = number;
export type TitoUTCDateTime = string;

export interface TitoSpeaker {
  bio: string;
  firstName: string;
  lastName: string;
  fullName: string;
  id: TitoSpeakerId;
  links: TitoSpeakerLink[];
  profilePicture: string;
  isTopSpeaker: boolean;
  sessions: number[];
  tagLine: string;
}

export interface TitoSession {
  categoryItems: TitoCategoryId[];
  description?: string;
  endsAt: TitoUTCDateTime;
  id: TitoSessionId;
  isPlenumSession: boolean;
  isServiceSession: boolean;
  roomId: TitoRoomId;
  speakers: TitoSpeakerId[];
  startsAt: TitoUTCDateTime;
  title: string;
}

export interface TitoRoom {
  id: TitoRoomId;
  name: string;
  sort: number;
}

export interface TitoCategory {
  id: TitoCategoryId;
  items: {
    id: number;
    name: string;
    sort: number;
  }[];
  sort: number;
  title: string;
  type: 'session';
}

export interface Tito {
  speakers: TitoSpeaker[];
  sessions: TitoSession[];
  rooms: TitoRoom[];
  categories: TitoCategory[];
}

export const useTito = (): Tito => {
  const { allRestApiApiV28Wk2U51QViewAll } = useStaticQuery<{
    allRestApiApiV28Wk2U51QViewAll: { nodes: Tito[] };
  }>(graphql`
    {
      allRestApiApiV28Wk2U51QViewAll {
        nodes {
          speakers {
            bio
            firstName
            fullName
            id
            isTopSpeaker
            lastName
            links {
              title
              url
              linkType
            }
            profilePicture
            sessions
            tagLine
          }
          sessions {
            categoryItems
            description
            endsAt
            id
            isPlenumSession
            isServiceSession
            roomId
            speakers
            startsAt
            title
          }
          rooms {
            id
            name
            sort
          }
          categories {
            id
            items {
              id
              name
              sort
            }
            sort
            title
            type
          }
        }
      }
    }
  `);
  return allRestApiApiV28Wk2U51QViewAll.nodes[0];
};
