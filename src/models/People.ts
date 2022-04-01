import { ImageSharp } from './ImageSharp';
import { Social } from './Social';

export class People {
  id: string;
  name: string;
  title: string;
  company: string;
  social: Social;
  bio: string;
  image: ImageSharp;

  constructor({ id, name, title, company, social, bio }: any, image: any) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.company = company;
    this.social = new Social(social);
    this.bio = bio;
    this.image = new ImageSharp(image);
  }
}
