import { useStaticQuery, graphql } from 'gatsby';
import { FileImage } from '../models/file';
import { People } from '../models/People';

export const useCommittee = (images: FileImage[]): People[] => {
  const { items } = useStaticQuery(graphql`
    {
      items: allCommitteeJson {
        edges {
          node {
            id
            name
            social {
              twitter
              github
              linkedin
            }
            company
            title
            bio
          }
        }
      }
    }
  `);

  return items.edges.map((sp: any) => {
    const image = images.find((img: any) => img.name === sp.node.id);
    return new People(sp.node, image);
  });
};
