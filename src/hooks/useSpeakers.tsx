import { useStaticQuery, graphql } from 'gatsby';
import { FileImage } from '../models/file';
import { Speaker } from '../models/Speaker';

export const useSpeakers = (speakerImages: FileImage[]): Speaker[] => {
  const { speakers } = useStaticQuery(graphql`
    {
      speakers: allSpeakersJson {
        edges {
          node {
            id
            name
            social {
              twitter
              github
              linkedin
            }
            talk {
              title
              description
              lightening
            }
            company
            title
            bio
          }
        }
      }
    }
  `);

  return speakers.edges.map((sp: any) => {
    const image = speakerImages.find((img: any) => img.name === sp.node.id);
    return new Speaker(sp.node, image);
  });
};
