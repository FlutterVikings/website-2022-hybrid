import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Container, MainTitle, Section } from '../common';
import { RelativeDirectory } from '../../models/file';
import { useAllFiles } from '../../hooks/useAllFiles';
import { ResponsiveGrid } from '../common/ResponsiveGrid';
import { FaceImage } from '../common/FaceImage';
import { useModerators } from '../../hooks/useModerators';

const Moderators = () => {
  const boardImages = useAllFiles(RelativeDirectory.moderators);
  const boardMembers = useModerators(boardImages);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="MCs" titleStrokeText={'Moderators'} />
              <ResponsiveGrid>
                {boardMembers.map((member) => {
                  return <FaceImage key={member.id} member={member} />;
                })}
              </ResponsiveGrid>
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Moderators };
