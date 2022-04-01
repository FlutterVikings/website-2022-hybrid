import { FixedObject, FluidObject } from 'gatsby-image';

export enum RelativeDirectory {
  speakers = 'speakers',
  committee = 'committee',
  communities = 'communities',
  sponsors = 'sponsors',
  team = 'team',
  moderators = 'moderators',
  venue = 'venue',
}

export interface FileImage {
  name: string;
  publicURL: string;
  relativeDirectory: RelativeDirectory;
  childImageSharp: { fixed: FixedObject; fluid: FluidObject };
}
