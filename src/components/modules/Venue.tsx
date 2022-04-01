import GatsbyImage from 'gatsby-image';
import React from 'react';
import { useAllFiles } from '../../hooks/useAllFiles';
import { RelativeDirectory } from '../../models/file';
import { Container, Content, MainTitle, Section } from '../common';
import { ImageWrapper } from '../common/FaceImage';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const Venue = () => {
  const images = useAllFiles(RelativeDirectory.venue);
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Amazing Location" titleStrokeText={'Venue'} />
          <ResponsiveGrid fill="auto-fit" size={16}>
            <Content center={true}>
              <p>
                Our in-person event will happen in the best location of Oslo city center ,
                in one of the best venue, named Felix Conference Center
              </p>
              <h3>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/uv?pb=!1s0x46416e81bb05208b%3A0x2c25291aa1955293!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNyFN6S-Vrisscp6hgZ6IOTQkYU4WNwQ38pE_dj%3Dw304-h160-k-no!5sfelix%20Konferansesenter%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNyFN6S-Vrisscp6hgZ6IOTQkYU4WNwQ38pE_dj&hl=en&sa=X&ved=2ahUKEwjRseqysNTzAhWDr4sKHYpKAs8Qoip6BAhwEAM"
                >
                  Check out our amazing venue!
                </a>
              </h3>
            </Content>
            {images.map((img: any, index: number) => {
              return <ImageWrapper key={index} image={img.childImageSharp} />;
            })}
          </ResponsiveGrid>
          <br />
        </Container>
      </Section>
    </>
  );
};

export { Venue };
