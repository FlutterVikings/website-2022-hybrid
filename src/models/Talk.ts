import { Speaker } from './Speaker';

export class Talk {
  title: string;
  description: string;
  lightening: boolean;
  coSpeaker: Speaker;

  constructor({ title, description, lightening, coSpeaker }: any) {
    this.title = title;
    this.description = description;
    this.lightening = lightening;
    this.coSpeaker = coSpeaker || '';
  }
}
