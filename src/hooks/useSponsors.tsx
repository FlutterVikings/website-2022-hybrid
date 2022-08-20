import { useStaticQuery, graphql } from 'gatsby';
import { FileImage } from '../models/file';
import { Sponsor } from '../models/Sponsor';

export const useSponsors = (images: FileImage[]): Sponsor[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allSponsorsJson {
        edges {
          node {
            sponsor_id
            dark
            link
            name
            level
          }
        }
      }
    }
  `);
  return items.edges.map((sp: any) => {
    const image = images.find((img) => {
      return img.name === sp.node.sponsor_id && img.publicURL.endsWith('.svg')
    });
    const darkImage = images.find((img) => {
      return img.name === sp.node.dark && img.publicURL.endsWith('.svg');
    });
    return new Sponsor(sp.node, image, darkImage);
  });
};
