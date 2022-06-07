import { Link } from '@reach/router';
import React from 'react';
import { Container, Content, MainTitle, Section } from '../common';

const TheEvent = () => {
  return (
    <>
      <Section>
        <Container id="important">
          <MainTitle title="The Event" titleStrokeText={'Welcome'} />
          <Content center={true}>
            FlutterVikings is a community-driven event made up of GDGs and other Nordic
            user groups focused on Flutter and Dart, as well as the global Flutter
            Community. With a fantastic lineup of Google Developer Experts and top-notch
            international speakers the FlutterVikings Conference boasts two of the best
            Flutter and Dart tracks anywhere, offering some of the most informative,
            technical and actually useful talks anywhere.
          </Content>
        </Container>
      </Section>
    </>
  );
};

const Diversity = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Everyone is welcome" titleStrokeText={'Diversity'} />
          <Content center={true}>
            <h3>Diversity</h3>
            FlutterVikings believes in diversity! We want to be as much inclusive as
            possible! FlutterVikings is here to close a gap between code and people! We
            care about you! Let's meet, chat, discuss, share, and spread the love, all
            with respect! Let's get together! Let's have fun and learn! Let's be a{' '}
            <strong>viking</strong>
            <br />
            <h3>Code of Conduct</h3>
            FlutterVikings is committed to providing a friendly, safe and welcoming
            environment for all, regardless of gender, sexual orientation, disability,
            ethnicity, or religion. Our Code of Conduct outlines our expectations for
            participants' behavior. We do not tolerate harassment of conference
            participants in any form.{' '}
            <Link className="blue" to={'code-of-conduct'}>
              Read full version
            </Link>
          </Content>
        </Container>
      </Section>
    </>
  );
};

export { TheEvent, Diversity };
