import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
    buildTime: string;
  };
}

const Footer = () => {
  const query = graphql`
    {
      site {
        buildTime(formatString: "DD.MM.YYYY")
      }
    }
  `;
  const render = (data: DataProps) => {
    return (
      <section className="adaptive-bg Scene Scene--footer">
        <div className="Scene-layers">
          <div className="Scene-fullSize Scene-stars" />
          <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--back" />
          <div className="Scene-fullSize Scene-mountains" />
          <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--front" />
          <div className="Scene-fullSize Scene-topSkyline" />
        </div>

        <div className="SceneOverlay">
          <img
            alt="Flutter Vikings"
            className="SceneOverlay-smallLogo"
            src="/assets/logo_invert.svg"
          />
          <div className="font__caesar SceneOverlay-footerTitle">Flutter Vikings</div>
          <div className="font__caesar SceneOverlay-footerSubtitle">
            2022, Oslo, Norway
          </div>
          <div className="font__caesar SceneOverlay-footerSubtitle">
            <a
              target="_blank"
              href="https://2020.fluttervikings.com"
              rel={'noreferrer noopener nofollow'}
            >
              Online'2020 website
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              href="https://feb2022.fluttervikings.com"
              rel={'noreferrer noopener nofollow'}
            >
              Online'Feb22 website
            </a>{' '}
          </div>
        </div>
      </section>
    );
  };
  return <StaticQuery query={query} render={render} />;
};

export { Footer };
