import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { useCommittee } from '../../hooks/useCommittee';
import { Container, Content, MainTitle, Section } from '../common';
import { RelativeDirectory } from '../../models/file';
import { useAllFiles } from '../../hooks/useAllFiles';
import { ResponsiveGrid } from '../common/ResponsiveGrid';
import { FaceImage } from '../common/FaceImage';

const Committee = () => {
  const boardImages = useAllFiles(RelativeDirectory.committee);
  const boardMembers = useCommittee(boardImages);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="Program Committee" titleStrokeText={'Board'} />
              <ResponsiveGrid size={15}>
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

export { Committee };
