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
            technical and actually useful talks anywhere. This website is being updated as
            more speakers are confirmed so make sure you subscribe to our newsletter, or
            follow us on twitter to get the latest updates! Besides the conference talks,
            be prepared for awesome MCs and a number of networking activities, interactive
            entertainment, and engaging challenges for all participants.
            {/* <h3>COVID-19</h3>
            We are observing COVID situation closely.Health and safety of our attendees
            and speakers are a high priority. If travel becomes more challenging and
            stricter restrictions or an increased risk of having an in-person conference,
            we might postpone the in-person conference. We strongly advise you to book
            your trip with the flexibility that you can change in an emergency. We will
            decide about in-person in week one or week two. Regardless, the online
            conference in Feb 2022 will be running. */}
            {/* <h3>Refund Policy</h3>We will fully refund your ticket price if the conference
            gets canceled due to COVID-19. However, please ensure you book your trip as
            flexibly as possible to avoid losing any money on your travel expenses. */}
          </Content>
        </Container>
      </Section>
    </>
  );
};

export const TheImportantNotice = () => {
  return (
    <>
      <Section>
        <Container>
          <MainTitle title="Important" titleStrokeText={'Update'} />
          <Content center={false}>
            <p>
              There is nothing more important than the health and safety of our attendees
              and speakers.
            </p>
            <p>
              Due to the COVID-19 pandemic, particularly the rise of Omicron variation and
              its global implications, we believe the in-person conference in February
              2022 won't introduce the best experience anymore.
            </p>
            <p>
              Therefore, to ensure that we will bring you the best and top-notch Flutter
              conference experience in the world, We have changed our program to match the
              current situation as follow:
            </p>
            <h3>Online only (2-3 February 2022)</h3>
            <ul>
              <li>
                The Conference will happen entirely online on the{' '}
                <b>2nd and 3rd of February 2022</b>.
              </li>
              <li>
                The new program will be announced on our website soon to match
                online-edition.
              </li>
              <li>
                We are working hard to have a new format for our online edition that is
                top-notch and unique to convey the best online-conf experience.
              </li>
              <li>
                If you have an existing ticket it has been transferred to the in-person
                event later this year. If you want to attend the online-only event in
                February you must book a FREE ticket at
                <a
                  href="https://fluttervikings.com/ticket"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label="tickets"
                >
                  fluttervikings.com/ticket
                </a>
                as during the conference we will have many online activities. You can only
                participate in the activities and win our prizes if you have a valid
                ticket!
              </li>
            </ul>
            <h3>Hybrid, in-person & Online (31st August, 1st September 2022)</h3>
            <ul>
              <li>
                We are postponing the in-person Conference to
                <b>31st August and 1st September 2022</b>
              </li>
              <li>We will open our CFP once more for new dates in April 2022. </li>
              <li>The venue and location will remain the same.</li>
              <li>
                Your conference registration will be transferred to the new conference
                dates.
              </li>
              <li>
                We highly recommend you keep your ticket as we have almost sold out. We
                believe the new date will accelerate ticket sales even faster. If you
                still want to join our Conference, it's best not to risk it now.
              </li>
              <li>
                However, If you have bought a ticket and need a refund, please email us at
                team@fluttervikings.com.
              </li>
            </ul>
            <p>
              We hope after summer will enable us to safely gather delegates from around
              the world at this Flutter conference and learn from top experts in the
              Flutter community and team.
            </p>
            <br />
            <b>We guarantee FlutterVikings 2022 will be worth the wait:</b>
            <ul>
              <li>Learn from top experts in the Flutter and Dart community and team</li>
              <li>Network with delegates from around the world</li>
              <li>Enhance your knowledge and skills</li>
              <li>
                Increase our capacity from <b>2 tracks</b> to <b>3 tracks</b> and from{' '}
                <b>330 attendees to 500 attendees</b>.
              </li>
              <li>Introducing advanced online tracks with a reasonable price tag.</li>
            </ul>
            <p>
              Thank you, our dear attendees and speakers, who believed in us. Your support
              and trust give energy and motivation.
            </p>
            <p>
              We appreciate our sponsors' support because it was impossible to secure our
              new date and venue without them. A huge thank you:{' '}
              <b>
                Google, Superlist, Stream, CodeMagic, Invertase, The @ Company, Very Good
                Ventures, DevAngels, Bouvet, Softiware, and Microsoft.
              </b>
            </p>
            <br />
            <p>
              We are looking forward to seeing you online in Feb and in-person at the end
              of summer 2022.
            </p>
            <br />
            <div>
              <p>With kind regards,</p>
              <small>
                Majid Hajian on behalf of The FlutterVikings team & Flutter Community
                admins
              </small>
            </div>
            <br />
            <div>
              <b>
                Please find below answers to the most frequently asked questions regarding
                the postponement of the Conference.
              </b>
              <ul>
                <li>
                  <b>Is the event canceled?</b> No, we have two editions in 2022! The Feb
                  edition is only online and FREE for everyone and in-person edition after
                  summer 2022.
                </li>
                <br />
                <li>
                  <b>Will my ticket and registration still be valid?</b> Yes, we will
                  carry your tickets to the next edition in September, you don't need to
                  do anything.
                </li>
                <br />
                <li>
                  <b>If I wish to cancel my ticket, can I get a refund?</b> Of course,
                  even though we are sad you decided to cancel your ticket, you have a
                  right to cancel it. Please send us an email at team@fluttervikings.com.
                </li>
                <br />
                <li>
                  <b>What should I do about my flight and hotel bookings?</b> We hope that
                  your bookings are flexible and you can change the date. Unfortunately,
                  we cannot help you; you must directly contact your airline or hotel.
                </li>
                <br />
                <li>
                  <b>Will the next date be in the exact location?</b> Yes, everything
                  remains the same, except we have a new date and a new CFP.
                </li>
                <br />
                <li>
                  <b>Do we need a free ticket for the online edition?</b> We strongly
                  recommend you book your free ticket. During the Conference, we will have
                  many online activities. You can only participate in the activities and
                  win our prizes if you have a valid ticket.
                </li>
                <br />
                <li>
                  <b>Where can I get a ticket? </b> please visit{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://fluttervikings.com/ticket"
                  >
                    fluttervikings.com/ticket
                  </a>
                </li>
              </ul>
            </div>
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
