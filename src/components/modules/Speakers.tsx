import { Link } from 'gatsby';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useSpeakers } from '../../hooks/useSpeakers';
import { useTito } from '../../hooks/useTito';
import { RelativeDirectory } from '../../models/file';
import { Container, MainTitle, Section } from '../common';
import { FaceImage } from '../common/FaceImage';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const Speakers = () => {
  const { speakers } = useTito();
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title={`Amazing Line-Up`} titleStrokeText={'speakers'} />
              <ResponsiveGrid>
                {speakers
                  .sort((a, b) => Number(b.isTopSpeaker) - Number(a.isTopSpeaker))
                  .map((member) => {
                    return (
                      <Link key={member.id} to={`/speakers/${member.id}`}>
                        <FaceImage member={member} key={member.id} />
                      </Link>
                    );
                  })}
              </ResponsiveGrid>
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Speakers };
