import { FileImage } from './file';
import { ImageSharp } from './ImageSharp';

export class Sponsor {
  id: string;
  dark?: string;
  name: string;
  link: string;
  level: number;
  image: ImageSharp;
  darkImage?: FileImage;
  constructor({ id, dark, name, level, link }: any, image: any, darkImage?: FileImage) {
    this.id = id;
    this.dark = dark;
    this.darkImage = darkImage;
    this.name = name;
    this.level = level;
    this.link = link;
    this.image = image;
  }
}
