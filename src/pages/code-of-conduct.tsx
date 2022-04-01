import React from 'react';
import { Container, Content, Header, Layout, Section } from '../components';
import { SEO } from '../components/base/SEO';

export default () => {
  return (
    <Layout>
      <Section>
        <SEO title={`Code of Conduct`} />
        <Container>
          <Header>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <img
                alt="FlutterVikings"
                className="SceneOverlay-logo"
                src="/assets/logo.svg"
              />
            </div>
            <h1 className="font__caesar size__h1">Code of Conduct</h1>
          </Header>
          <Content>
            <div className="field__item">
              <p>
                This policy is a living document and subject to refinement and updates in
                the future. Last updated on 18 October 2021.
              </p>
              <p>
                FlutterVikings is a friendly community where everyone should feel welcome,
                safe and comfortable to share ideas and engage in open discussion. It’s
                really important for us to provide a harassment-free experience for
                everyone inclusive of gender, gender identity and expression, sexual
                orientation, disability, physical appearance, body size, race, age,
                nationality or religion.
              </p>
              <p>
                All participants, speakers, sponsors and staff are required to abide by
                our code of conduct at White October Events conferences and meetups, and
                online. Any violations will be dealt with seriously and may include being
                expelled and banned from events or online spaces without a refund. This is
                to protect the safety of our community.
              </p>
              <h3>Definitions</h3>
              <p>
                What do we mean by “harassment”? Harassment includes but isn’t limited to:
              </p>
              <ul>
                <li>
                  Offensive comments related to{' '}
                  <a
                    className="blue"
                    href="https://www.stonewall.org.uk/help-advice/glossary-terms"
                  >
                    gender, gender identity and expression, sexual orientation
                  </a>
                  , disability, mental illness, neurotype, physical appearance, body size,
                  race, age, nationality, religion or belief, marital and civil
                  partnership status, pregnancy or carer or parental status, familial
                  status, veteran status, citizenship
                </li>
                <li>
                  Unwelcome comments regarding a person’s lifestyle choices and practices,
                  including those related to food, health, parenting, drugs, and
                  employment
                </li>
                <li>
                  Homophobic, biphobic, transphobic, racist, or sexist slurs or comments
                </li>
                <li>Deliberate misgendering</li>
                <li>Physical contact without consent or after a request to cease</li>
                <li>Threats or acts of violence or intimidation</li>
                <li>Unwelcome sexual attention</li>
                <li>Sharing/displaying sexual or sexualised images</li>
                <li>
                  Deliberate “outing” of any aspect of a person’s identity without their
                  consent
                </li>
                <li>
                  Harassing photography or recording, including logging online activity
                  for harassment purposes
                </li>
                <li>Sustained disruption of discussion</li>
                <li>Advocating for or encouraging any of the above behaviours</li>
              </ul>
              <p>
                We prioritise the safety of marginalised people’s safety over privileged
                people’s comfort. This means we reserve the right not to act on complaints
                regarding:
              </p>
              <ul>
                <li>
                  Reverse-isms, including ‘reverse racism’, ‘reverse sexism’, and
                  ‘cisphobia’
                </li>
                <li>
                  Reasonable communication of boundaries, such as “leave me alone”, “go
                  away”, “I’m not discussing this with you”
                </li>
                <li>
                  Criticising racist, sexist, cissexist, or otherwise oppressive behaviour
                </li>
              </ul>
              <h3>Consequences</h3>
              <p>
                Participants asked to stop any harassing behaviour are expected to stop
                immediately.
              </p>
              <p>
                Participants engaging in harassing behaviour may be asked to leave an
                event or online space and may be banned temporarily or indefinitely. If a
                ticket was purchased for an in-person or online event, we reserve the
                right not to issue a refund.
              </p>
              <p>
                If harassment occurs outside an event or online space organised by White
                October Events that may impact the safety of our community, we reserve the
                right to investigate and take appropriate action, for instance banning
                from future events.
              </p>
              <h3>Reporting</h3>
              <p>
                If you are being harassed or made to feel unsafe or unwelcome, please
                report it as soon as possible. You can help us by reporting any behaviour
                you think might go against the Code of Conduct.
              </p>
              <ul>
                <li>
                  Email:{' '}
                  <a
                    className="blue"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:team@flutterVikings.com?subject=Flutter%20Vikings%20Code%20of%20Conduct"
                  >
                    FlutterVikings Team
                  </a>
                </li>
                <li>
                  In-person at events: speak to a staff member wearing a t-shirt with
                  ‘staff’ or ‘organiser’ on the back.
                </li>
              </ul>
              <h3>Reporting &amp; enforcement process</h3>
              <ol>
                <li>
                  Incident report is taken in a safe, private space at events or in a
                  personal and direct message online
                </li>
                <li>Incident responders investigate with the reported person</li>
                <li>
                  Incident response team reconvene to discuss an appropriate response
                </li>
                <li>Appropriate action is taken</li>
                <li>
                  Incident responders follow up with the reporter and the reported person
                </li>
                <li>Inform community if necessary</li>
                <li>Debrief and document internally</li>
              </ol>
              <h3>Important local contacts</h3>
              <p>
                Please see the event-specific Code of Conduct for contact details of local
                services.
              </p>
              <h3>Thanks</h3>
              <p>
                Our updated Code of Conduct was based on resources from{' '}
                <a
                  className="blue"
                  href="http://geekfeminism.wikia.com/wiki/Community_anti-harassment/Policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geek Feminism
                </a>{' '}
                and the{' '}
                <a
                  className="blue"
                  href="https://2018.xoxofest.com/conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  XOXO Community Code of Conduct
                </a>
                .
              </p>
            </div>
          </Content>
        </Container>
      </Section>
    </Layout>
  );
};
