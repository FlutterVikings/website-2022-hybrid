export class ImageSharp {
  name: string;
  publicURL: string;
  constructor({ name, publicURL }: any) {
    this.name = name;
    this.publicURL = publicURL;
  }
}
