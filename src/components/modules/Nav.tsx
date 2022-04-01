import { Link } from '@reach/router';
import React, { useEffect, useMemo, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { ThemeConsumer } from 'styled-components';
import config from '../../config';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { VikingTheme } from '../../theme';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const onBurgerBtnClick = () => {
    setIsOpen(!isOpen);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    undefined,
    false,
    400,
  );

  const closeNavDefaultPrevent = (e: any) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]); // Empty array ensures effect is only run on mount and unmount

  return useMemo(
    () => (
      <ThemeConsumer>
        {(theme: VikingTheme) => {
          return (
            <div
              className={`Nav ${isOpen ? 'Nav--open' : 'Nav--away'} ${
                hideOnScroll ? '' : 'Nav--scrolled'
              }`}
            >
              <div
                className="Nav-bar"
                style={!hideOnScroll ? { backgroundColor: theme.colors.primary } : {}}
              >
                <div className="Nav-barMenu">
                  <span id="OpenMenuLabel" className="VisuallyHidden">
                    Open Menu
                  </span>
                  <button
                    onClick={onBurgerBtnClick}
                    className={`BurgerBtn ${isOpen ? 'BurgerBtn--open' : ''}`}
                    style={{ backgroundColor: theme.colors.primary }}
                    aria-controls="Nav-overlay"
                    aria-haspopup="true"
                    aria-label="Open Menu"
                    aria-labelledby="OpenMenuLabel"
                  >
                    <div className="BurgerBtn-line" />
                    <div className="BurgerBtn-line" />
                    <div className="BurgerBtn-line" />
                  </button>
                </div>

                <a className="Nav-barLogo" href="/">
                  <img alt="FlutterVikings" className="NavLogo" src="/assets/logo.svg" />
                  <span className="Nav-title">
                    <span className="font__caesar">Flutter Vikings</span>
                    <br />
                    2022
                  </span>
                </a>
              </div>
              <div
                id="Nav-overlay"
                className="Nav-overlay"
                aria-hidden={isOpen}
                style={{ backgroundColor: theme.colors.primary }}
              >
                <nav className="NavContent">
                  <div className="NavContent-row">
                    <section className="NavContent-section">
                      <h2 className="NavContent-title">Where do you want to go?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <Link to={'/'} onClick={closeNav}>
                            Homepage
                          </Link>
                        </li>
                        <li className="NavContent-item">
                          <Link to={'activities'} onClick={closeNav}>
                            Activities and Prizes
                          </Link>
                        </li>
                        <li className="NavContent-item">
                          <ScrollIntoView selector="#speakers">
                            <Link to={'/'} onClick={closeNavDefaultPrevent}>
                              Speakers
                            </Link>
                          </ScrollIntoView>
                        </li>
                        <li className="NavContent-item">
                          <ScrollIntoView selector="#agenda">
                            <Link to={'/'} onClick={closeNavDefaultPrevent}>
                              Our program
                            </Link>
                          </ScrollIntoView>
                        </li>
                        <li className="NavContent-item">
                          <Link to={'/code-of-conduct/'} onClick={closeNav}>
                            Code of Conduct
                          </Link>
                        </li>
                      </ul>
                    </section>

                    <section className="NavContent-section">
                      <h2 className="NavContent-title">What do you want to do?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.ticketUrl}
                          >
                            Free Viking tickets
                          </a>
                        </li>
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.ticketUrl}
                          >
                            in-person tickets
                          </a>
                        </li>
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.twitterUrl}
                          >
                            Share on Twitter
                          </a>
                        </li>
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={config.youtubeUrl}
                          >
                            Subscribe on Youtube
                          </a>
                        </li>
                        <li className="NavContent-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:team@flutterVikings.com"
                          >
                            Become sponsor
                          </a>
                        </li>
                      </ul>
                    </section>
                  </div>

                  <div className="NavContent-row">
                    <section className="NavContent-section">
                      <h2 className="NavContent-title">How do you want to reach us?</h2>
                      <ul className="NavContent-items">
                        <li className="NavContent-item">
                          <div className="NavContact">
                            <div className="NavContact-label">Write to:</div>
                            <div className="NavContact-value">
                              <a
                                target="_blank"
                                href="mailto:team@flutterVikings.com"
                                rel="noopener noreferrer"
                              >
                                team@flutterVikings.com
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </section>

                    <section className="NavContent-section">
                      <h2 className="NavContent-title">Subscribe our newsletter</h2>
                      <div className="NavContent-newsletter">
                        <div className="NavContent-item">
                          <form
                            action="https://fluttervikings.us2.list-manage.com/subscribe/post?u=04d2c285193cfdda93a775eae&amp;id=e6a702864d"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            className="NewsletterForm"
                            target="_blank"
                          >
                            <div className="NewsletterForm-input">
                              <span className="InputHoshi InputHoshi--nav">
                                <input
                                  className="InputHoshi-field"
                                  defaultValue=""
                                  type="email"
                                  name="EMAIL"
                                  id="mce-EMAIL"
                                  placeholder="Your Email"
                                />
                                <label className="InputHoshi-label" htmlFor="mce-EMAIL">
                                  <span className="InputHoshi-border" />
                                </label>
                              </span>
                            </div>

                            <div className="NewsletterForm-submit">
                              <input
                                type="submit"
                                className="Btn Btn--regular Btn--bordered"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>

                  <section className="NavContent-bottom">
                    <a
                      className="NavContent-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.twitterUrl}
                    >
                      @flutterVikings
                    </a>

                    <a
                      className="NavContent-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={config.youtubeUrl}
                    >
                      flutterVikings.com/youtube
                    </a>
                  </section>
                </nav>
              </div>
            </div>
          );
        }}
      </ThemeConsumer>
    ),
    [hideOnScroll, isOpen],
  );
};

export { Nav };
