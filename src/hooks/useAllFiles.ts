import { useStaticQuery, graphql } from 'gatsby';
import { FileImage, RelativeDirectory } from '../models/file';

export const useAllFiles = (dir?: RelativeDirectory): FileImage[] => {
  const { images } = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            name
            publicURL
            relativeDirectory
          }
        }
      }
    }
  `);
  /*
  childImageSharp {
              fixed(width: 60, height: 60, cropFocus: CENTER, grayscale: true) {
                ...GatsbyImageSharpFixed_withWebp
              }
              fluid(
                maxWidth: 300
                maxHeight: 500
                quality: 100
                cropFocus: CENTER
                grayscale: true
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
  */
  const allImages: FileImage[] = images.edges.map((img: any) => img.node);

  switch (dir) {
    case RelativeDirectory.speakers:
      return allImages.filter(
        (img) => img.relativeDirectory === RelativeDirectory.speakers,
      );
    case RelativeDirectory.committee:
      return allImages.filter(
        (img) => img.relativeDirectory === RelativeDirectory.committee,
      );
    case RelativeDirectory.communities:
      return allImages.filter(
        (img) => img.relativeDirectory === RelativeDirectory.communities,
      );
    case RelativeDirectory.sponsors:
      return allImages.filter(
        (img) => img.relativeDirectory === RelativeDirectory.sponsors,
      );
    case RelativeDirectory.moderators:
      return allImages.filter(
        (img) => img.relativeDirectory === RelativeDirectory.moderators,
      );
    case RelativeDirectory.team:
      return allImages.filter((img) => img.relativeDirectory === RelativeDirectory.team);
    case RelativeDirectory.venue:
      return allImages.filter((img) => img.relativeDirectory === RelativeDirectory.venue);
    default:
      return allImages;
  }
};
