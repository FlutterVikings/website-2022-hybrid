import { Link } from 'gatsby';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { Content, Layout, Section } from '../components';
import ScrollIntoView from 'react-scroll-into-view';
import { SEO } from '../components/base/SEO';

const ActivityRow = styled.div`
  display: flex;
`;

const SimpleClickToTweet = styled.div`
  display: block;
  position: relative;
  text-align: center;
  border-style: solid;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 15px 30px;
  margin: 15px 0px;
`;

const TwitterLogoLink = styled.a`
  margin: 0;
  padding: 0;
  position: center;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  color: #ffffff;
  padding-right: 24px;
  text-decoration: none;
  background: transparent url(/assets/Twitter_Social_Icon_Circle_Color.svg) no-repeat
    right top;
`;

const ActivityDivider = styled.div`
  margin: 2rem 0;
  display: flex;
  width: 100%;
  height: 1px;
  background: #ccc;
`;

const TableContentItem = styled.b`
  padding: 1rem 0;
  cursor: pointer;
`;

const SmallHeader = styled.header`
  position: relative;
  padding: 2rem 0;
  text-align: center;
  font-size: 32px;
`;

const VerySmallHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 18px;
`;

export default () => {
  return (
    <>
      <Layout>
        <SEO title="FlutterVikings activities - Win a Dash or other prizes" />
        <Section>
          <Container>
            <Content>
              <SmallHeader>
                <h1 className="font__caesar size__h1">Activities & Prizes</h1>
              </SmallHeader>
              <ActivityRow>
                <div className="entry-contest">
                  <p>
                    We know it's essential to go the extra mile to keep our attendees
                    interested and engaged as an online conference. We have a host of live
                    activities and contests running throughout the conference.
                  </p>
                  <br />
                  <SmallHeader>Prizes and Gifts!</SmallHeader>
                  <p>
                    Why should you participate 🤔 ? Well, we hope that they will be fun
                    and that maybe you will learn something new about Flutter while
                    participating. However, we also have some more concrete incentives
                    lined up... Prizes!!!
                  </p>
                  <p>
                    Here are the prizes that will be awarded throughout the conference for
                    the various activity contests and quiz winners!
                  </p>
                  <ul>
                    <li>Dash!</li>
                    <li>Free Flutter in action book</li>
                    <li>Flutter Vikings and Flutter T-Shirt</li>
                    <li>Flutter Stickers</li>
                    <li>BookReader from Invertase.io</li>
                    <li>Cash up to 4000 USD from the @ company</li>
                    <li>Noise cancellation headphone from Stream.io</li>
                    <li>And many more</li>
                  </ul>
                  <h3>Table of content</h3>
                  <ol>
                    <li>
                      <ScrollIntoView selector="#a-1">
                        <TableContentItem>
                          Draw a Vikings Dash and win a Dash! by Flutter Vikings
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-2">
                        <TableContentItem>
                          "Write a Flutter article" and win a BookReader! by Invertase.io
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-3">
                        <TableContentItem>Google DevLibrary</TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-4">
                        <TableContentItem>
                          Reinvent the @rrive mobile app and win up to 4000 USD! by The @
                          Company
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-5">
                        <TableContentItem>Build Vikings by Stream</TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-6">
                        <TableContentItem>
                          Quiz run by Robert Brunhage and win his course for FREE!
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-7">
                        <TableContentItem>
                          Quiz run by Andrea Bizzotto and win his courses!
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                    <li>
                      <ScrollIntoView selector="#a-8">
                        <TableContentItem>
                          Social Media Contest (Win T-shirt and Stickers)
                        </TableContentItem>
                      </ScrollIntoView>
                    </li>
                  </ol>
                  <ActivityDivider id="a-1" />
                  <SmallHeader>
                    Draw a Vikings Dash and win a Dash! by Flutter Vikings
                  </SmallHeader>
                  <p>It's simple, use Flutter and draw the Dashes below</p>
                  <p>
                    <img
                      alt="FlutterVikings Dash"
                      src="/assets/vikings-dash.svg"
                      style={{ height: '300px', width: '100%' }}
                    />
                  </p>
                  <p>We will judge based on</p>
                  <ul>
                    <li>Code quality</li>
                    <li>Best drawing</li>
                    <li>Added extra features such as animation</li>
                    <li>Scaling properly based on screen sizes</li>
                    <li>We accept only on CodePen or DartPad</li>
                    <li>You must have a valid ticket to be able to submit</li>
                  </ul>
                  <p>
                    <strong>Prize:</strong>&nbsp;The top two submissions will receive a
                    Dash and the top 10 submission will receive a Flutter or
                    FlutterVikings T-shirt and Flutter stickers
                  </p>
                  <p>Deadline to submit your artwork is until 7th February</p>
                  <br />
                  <p>
                    <a
                      href="https://bit.ly/3s5oBqa"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Submit your work here{' '}
                    </a>{' '}
                    and we will contact you
                  </p>
                  <ActivityDivider id="a-2" />
                  <SmallHeader>
                    "Write a Flutter article" and win a BookReader! by Invertase.io
                  </SmallHeader>
                  <p>
                    <a
                      href="https://bit.ly/3E3vCML"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Invertase
                    </a>{' '}
                    builds ambitious software which enables companies to succeed.
                    Invertase is mostly an open-source minded company which is focusing on
                    Developer tooling & integration specialists.
                  </p>
                  <p>
                    In Flutter community, Invertase is well-known because of FlutterFire
                    package which is used by millions of Flutter developers.
                  </p>
                  <p>
                    This contest is easy! Invertase wants you to use your creativity and
                    do your best to write an article about Flutter, Firebase or any
                    Invertase open-source package such as Melos.
                  </p>
                  <h3>Invertase will judge your work based on: </h3>
                  <ul>
                    <li>
                      Your topic has not been already published on{' '}
                      <a
                        href="https://bit.ly/33XGMGv"
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        Invertase blog
                      </a>
                    </li>
                    <li>
                      Your article must be unique and pass for Plagiarism, you should not
                      copy other's work!
                    </li>
                    <li>
                      Your article must be about Flutter, Flutter and Firebase, Melos, any
                      other{' '}
                      <a
                        href="https://bit.ly/3AI3XAp"
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        open-source projects that Invertase is maintaining
                      </a>
                    </li>
                    <li>Your article must at least have 1500 words</li>
                    <li>
                      Your article must have working project, code and sample snippets
                    </li>
                    <li>Your article must be in English</li>
                    <li>Your article must have least grammar or spelling mistakes!</li>
                    <li>Adding screenshots are plus!</li>
                    <li>You must submit your article before 14th February!</li>
                    <li>Your article must be written in Markdown (.md) format</li>
                    <li>
                      You should not publish this article on any other websites expect on
                      Invertase.io
                    </li>
                  </ul>
                  <p>
                    <strong>Prize:</strong>&nbsp;Authors of the top two articles will
                    receive a BookReader and the top 10 articles will receive Invertase
                    Swag kit.{' '}
                    <a
                      href="https://bit.ly/3oashpI"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Submit your articles here and win our prizes
                    </a>
                  </p>
                  <ActivityDivider id="a-3" />
                  <SmallHeader>Google DevLibrary</SmallHeader>
                  <p>
                    Dev Library is collaborating with Flutter Vikings Conference to add
                    some 'execution with the learnings'!
                  </p>
                  <p>
                    Dev Library is an open-source platform that is built for external
                    developers who have built an open-source project or written a blog
                    using any of the Google Technologies–Angular, Android, Flutter,
                    Firebase, Machine Learning, or Cloud.{' '}
                  </p>
                  <p>
                    With Flutter Vikings, we are presenting a week of Flutter Projects!
                  </p>
                  <p>
                    During the actual Flutter Vikings Conference (1st to 4th February), we
                    will open the space for Flutter Innovations.{' '}
                    <a
                      href=" https://bit.ly/3Gk2EJ4"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Submit your projects or articles{' '}
                    </a>
                    built using Flutter on Dev Library .
                  </p>
                  <p>
                    By the end of the week, best projects will be accepted on the site,
                    and a few will receive special prizes from Google’s Dev Library under
                    the following categories:
                  </p>
                  <ul>
                    <li>Most Innovative Project</li>
                    <li>Inspired from Dev Library </li>
                    <li>Best use of Flutter</li>
                  </ul>
                  <p>
                    So, start submitting your Flutter projects NOW! You could also add
                    your suggestions or views.{' '}
                    <a
                      href="https://bit.ly/3rgMwnz"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Click here to check{' '}
                    </a>{' '}
                    the existing Flutter projects.{' '}
                  </p>
                  <ActivityDivider id="a-4" />
                  <SmallHeader>
                    Reinvent the @rrive mobile app ! by The @ Company
                  </SmallHeader>
                  <p>
                    One of our @platform apps in development is nearly complete but needs
                    your help! @rrive is a fully open source Flutter app designed to
                    securely share locations with people you trust. Share locations
                    one-on-one for a specific time period or create an event for several
                    people in your circle and share your locations for that event.
                  </p>
                  <p>
                    <strong>Prize:</strong>&nbsp;{' '}
                    <a
                      href="https://bit.ly/35u5zSJ"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Read more here and good luck! It will have 7000 USD cash!{' '}
                    </a>
                  </p>
                  <br />
                  <p>
                    <strong>BTW</strong>, did you know you can also request a FREE @sign!
                    You can request a custom blue 💙 or purple heart 💜 (or both!) @sign,
                    normally priced at $100! But you will get it for <strong>FREE</strong>
                    !{' '}
                    <a
                      href="https://bit.ly/3s04mu5"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      Click here!
                    </a>
                  </p>
                  <ActivityDivider id="a-5" />
                  <SmallHeader>Build Vikings by Stream</SmallHeader>
                  <p>
                    Get a chance to win one of two{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html?mc=25_PS_N7_BO_00_GO_&gclid=Cj0KCQiAxc6PBhCEARIsAH8Hff3bzIPuOSEchMKsVOjNe0IkBQTSWWADTdm1fboBH4p1BhuRr75Fk7AaAknKEALw_wcB&gclsrc=aw.ds#v=noise_cancelling_headphones_700_black"
                    >
                      Bose Noise Cancelling Headphones.{' '}
                    </a>
                  </p>
                  <p>
                    Entry is really easy... All you need to do is create a chat
                    application with animated reactions and stickers 😱 Don't be scared,
                    Viking.
                  </p>
                  <p>
                    Luckily this is a simple task with{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://getstream.io/chat/docs/sdk/flutter/?utm_source=FlutterVikings&utm_medium=Whole_Event_V&utm_content=Developer&utm_campaign=FlutterVikings_Feb2022&utm_term=BoothResources"
                    >
                      Stream Chat Flutter{' '}
                    </a>
                    and{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://rive.app/?utm_medium=external_example&utm_source=codelab&utm_campaign=stream"
                    >
                      Rive.{' '}
                    </a>
                    Stream also made a{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://getstream.io/codelabs/flutter/flutter-chat-and-rive-animations/"
                    >
                      codelab{' '}
                    </a>
                    that walks you through the entire process, step by step. For a chance
                    to enter the giveaway, you have to:
                  </p>{' '}
                  <br />
                  <p>
                    1. Complete the{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://getstream.io/codelabs/flutter/flutter-chat-and-rive-animations/"
                    >
                      codelab{' '}
                    </a>
                  </p>{' '}
                  <br />
                  <p>
                    2. At the last step of the codelab replace the example sticker pack
                    with your stickers{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://rive.app/?utm_medium=external_example&utm_source=codelab&utm_campaign=stream"
                    >
                      Rive{' '}
                    </a>
                    animations. You can create your own or use any of the{' '}
                    <a
                      target="_blank"
                      rel="noopener nofollow"
                      href="https://rive.app/community/?utm_medium=external_example&utm_source=codelab&utm_campaign=stream"
                    >
                      community animations{' '}
                    </a>
                    that have an open license.
                  </p>{' '}
                  <br />
                  <p>
                    3. Record a short video of your working chat application with your
                    custom stickers! Tweet @getstream_io, @rive_app, and @FlutterVikings,
                    and also include the #buildvikings hashtag.
                  </p>
                  <br />
                  <p>
                    Entries will be open until the{' '}
                    <b>7th of February 2022, at 4 pm CET</b>
                  </p>{' '}
                  <br />
                  <p>
                    {' '}
                    Winners will be announced on the <b>9th of February 2022</b>.
                  </p>
                  <ActivityDivider id="a-6" />
                  <SmallHeader>Quiz run by Robert Brunhage</SmallHeader>
                  <p>
                    Robert is a well-known community member which has done a fantastic job
                    by creating courses and videos on youtube. He will run a quiz on Day 1
                    (Activity time) online and will give away Free and discounted coupon
                    to his course{' '}
                    <a
                      href="https://bit.ly/3KZ5lDl"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      https://robertbrunhage.com/course
                    </a>
                    , Make sure you attend his online quiz!
                  </p>
                  <p>
                    <strong>Prize:</strong>&nbsp; Free and discounted course!
                  </p>
                  <ActivityDivider id="a-7" />
                  <SmallHeader>Quiz run by Andrea Bizzotto</SmallHeader>
                  <p>
                    Andrea is a well-known community member which has done a fantastic job
                    by creating courses and videos on Youtube and so many amazing articles
                    on his website. He will run a quiz on Day 2 (Activity time) online and
                    will give away Free and discounted coupon to his courses{' '}
                    <a
                      href="https://bit.ly/3IMZZcp"
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      https://codewithandrea.com/courses/
                    </a>{' '}
                    , Make sure you attend his online quiz!
                  </p>
                  <p>
                    <strong>Prize:</strong>&nbsp; Free and discounted course!
                  </p>
                  <ActivityDivider id="a-8" />
                  <SmallHeader>Social Media Contests</SmallHeader>
                  <p>
                    Take a selfie and tweet it with this to win (Be creative with your
                    selfie's and Tweets){' '}
                  </p>
                  <SimpleClickToTweet>
                    <a
                      rel="noopener noreferrer nofollow"
                      className="tm-ctt-btn"
                      href="https://twitter.com/share?text=Me+with+the+Vikings%E2%80%9D+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                      target="_blank"
                    >
                      “I'm plundering for Flutter treasures 💙 with the Vikings”
                      #fluttervikings @fluttervikings
                    </a>
                    <TwitterLogoLink
                      href="https://twitter.com/share?text=Me+with+the+Vikings%E2%80%9D+%23fluttervikings&amp;url=https://www.fluttervikings.com"
                      target="_blank"
                    >
                      &nbsp;
                    </TwitterLogoLink>
                  </SimpleClickToTweet>
                  <br />
                  <VerySmallHeader>AND / OR </VerySmallHeader>
                  <br />
                  <p>
                    Take a selfie and post it on Linkedin with this text to win (Be
                    creative with your Linkedin Post)
                  </p>
                  <div className="tm-click-to-tweet" style={{ textAlign: 'center' }}>
                    <a
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://fluttervikings.com&title=My%20Flutter%20Vikings%20Selfie&summary=%20%E2%80%9CI'm%20plundering%20for%20Flutter%20treasures%20%F0%9F%92%99%20with%20the%20Vikings%E2%80%9D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23FlutterVikings%20%40flutterVikings&source=https%3A//fluttervikings.com/activities/"
                    >
                      “I'm plundering for Flutter treasures 💙 with the Vikings”
                      #FlutterVikings &nbsp;
                    </a>
                  </div>
                  <br />
                  <p>
                    <strong>Prize:</strong>&nbsp;For the 5 best social media posts each
                    day: <strong>T-shirt and Stickers</strong>
                  </p>
                  <p />
                </div>
              </ActivityRow>
              <br />
              <br />
              <div className="CTA-actions" style={{ textAlign: 'center' }}>
                <Link className="Btn Btn--ticket Btn--cta" to="/">
                  Back to homepage
                </Link>
              </div>
            </Content>
          </Container>
        </Section>
      </Layout>
    </>
  );
};
