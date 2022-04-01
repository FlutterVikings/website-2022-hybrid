import { People } from './People';
import { Talk } from './Talk';

export class Speaker extends People {
  talk: Talk;

  constructor({ id, name, title, company, social, talk, bio }: any, image: any) {
    super({ id, name, title, company, social, bio }, image);
    this.talk = new Talk(talk);
  }
}
