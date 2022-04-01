import React from 'react';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useTeam } from '../../hooks/useTeam';
import { RelativeDirectory } from '../../models/file';
import { Container, MainTitle, Section } from '../common';
import { FaceImage } from '../common/FaceImage';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const Team = () => {
  const images = useAllFiles(RelativeDirectory.team);
  const team = useTeam(images);
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Vikings Crew" titleStrokeText={'Orginizers'} />
          <ResponsiveGrid fill="auto-fit" size={16}>
            {team.map((member) => {
              return <FaceImage key={member.id} member={member} />;
            })}
          </ResponsiveGrid>
        </Container>
      </Section>
    </>
  );
};

export { Team };
