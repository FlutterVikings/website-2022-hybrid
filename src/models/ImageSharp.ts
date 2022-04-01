import { FixedObject, FluidObject } from 'gatsby-image';

export class ImageSharp {
  name: string;
  publicURL: string;
  fixed: FixedObject;
  fluid: FluidObject;
  constructor({ name, publicURL, childImageSharp }: any) {
    this.name = name;
    this.publicURL = publicURL;
    this.fixed = childImageSharp.fixed;
    this.fluid = childImageSharp.fluid;
  }
}
