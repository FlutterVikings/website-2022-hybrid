import { Speaker } from './Speaker';

export interface Program {
  title: string;
  startTime: string;
  endTime: string;
  isActivity?: boolean;
  winnerTime?: boolean;
  speaker?: Speaker;
  speakers?: Speaker[];
  coSpeaker?: string;
}
export interface Track {
  name: string;
  programs: Program[];
}
export interface Agenda {
  name: string;
  date: string;
  dateISO: string;
  tracks: Track[];
}
