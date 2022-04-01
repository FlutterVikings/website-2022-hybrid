import { useStaticQuery, graphql } from 'gatsby';
import { FileImage } from '../models/file';
import { Sponsor } from '../models/Sponsor';

export const useSponsors = (images: FileImage[]): Sponsor[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allSponsorsJson {
        edges {
          node {
            id
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
    const image = images.find((img) => img.name === sp.node.id);
    const darkImage = images.find((img) => img.name === sp.node.dark);
    return new Sponsor(sp.node, image, darkImage);
  });
};
