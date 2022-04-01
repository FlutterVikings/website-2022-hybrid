import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useCommunities } from '../../hooks/useCommunities';
import { RelativeDirectory } from '../../models/file';
import { Container, MainTitle, Section } from '../common';
import { SponsorshipEmailLink, SponsorsLevel } from './CommonSponsors';

const Communities = () => {
  const images = useAllFiles(RelativeDirectory.communities);
  const sponsors = useCommunities(images);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="Supporter" titleStrokeText={'Communities'} />
              <SponsorsLevel title="" list={sponsors} theme={theme} />
              <SponsorshipEmailLink title="Do you want to become part of this amazing conference?" />
              {/* <br />
              <br />

              <MainTitle
                title="Check out our partner conference DartUp"
                titleStrokeText={'dartup'}
              />
              <p style={{ textAlign: 'center' }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href="https://dartup.ru/eng/"
                >
                  <img
                    alt="dartup"
                    src="https://d2kq0urxkarztv.cloudfront.net/5baa4a0083c738006135489f/2214994/upload-dd251d0c-fa3b-44f3-bfb4-0ab4ef890fd2.png?w=324&e=webp&cX=43&cY=125&cW=521&cH=141"
                  />
                </a>
              </p> */}
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Communities };
