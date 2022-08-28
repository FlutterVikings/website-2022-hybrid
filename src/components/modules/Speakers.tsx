import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { TitoSpeaker, useTito } from '../../hooks/useTito';
import { Container, MainTitle, Section } from '../common';
import { FaceImage } from '../common/FaceImage';
import { ResponsiveGrid } from '../common/ResponsiveGrid';
import NiceModal from '@ebay/nice-modal-react';
import { SpeakerModal } from '../../templates/speaker';

const Speakers = () => {
  const { speakers } = useTito();

  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section >
            <Container>
              <MainTitle title={`Amazing Line-Up`} titleStrokeText={'speakers'} />
              <ResponsiveGrid>
                {speakers
                  .sort((a, b) => Number(b.isTopSpeaker) - Number(a.isTopSpeaker))
                  .map((member) => (
                    <SpeakerButton key={member.id} speaker={member} />
                  ))}
              </ResponsiveGrid>
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

const SpeakerButton = ({ speaker }: { speaker: TitoSpeaker }) => {
  const handleButton = (e: any) => {
    e.preventDefault();
    NiceModal.show(SpeakerModal, { speaker });
  };
  return (
    <a role="button" key={speaker.id} onClick={handleButton}>
      <FaceImage member={speaker} key={speaker.id} />
    </a>
  );
};

export { Speakers };
