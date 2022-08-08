import { useStaticQuery, graphql } from 'gatsby';
import { FileImage } from '../models/file';
import { Sponsor } from '../models/Sponsor';

export const useCommunities = (images: FileImage[]): Sponsor[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allCommunitiesJson {
        edges {
          node {
            sponsor_id
            link
            name
            level
          }
        }
      }
    }
  `);
  return items.edges.map((sp: any) => {
    const image = images.find((img) => img.name === sp.node.sponsor_id);
    return new Sponsor(sp.node, image);
  });
};
