import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useTito } from '../../hooks/useTito';
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
                      <a key={member.id}>
                        <FaceImage member={member} key={member.id} />
                      </a>
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
