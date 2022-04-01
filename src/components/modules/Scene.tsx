import { Link } from 'gatsby';
import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import config from '../../config';
import { useWindowSize } from '../../hooks/useWindowSize';

import '../../style/northenLights.scss';
import { sizes } from '../../utils/media';

const Aurora = () => {
  return (
    <div className="bg">
      <div className="aur_cont">
        {Array(24)
          .fill(0)
          .map((_, i) => {
            return <span key={i} className={`aur aur_${i + 1}`} />;
          })}
      </div>
      <div className="star" />
      {Array(4)
        .fill(0)
        .map((_, i) => {
          return <span key={i} className={`wave wave_${i + 1}`} />;
        })}
    </div>
  );
};

const Scene = () => {
  const { width } = useWindowSize();
  return (
    <section className="Scene">
      <div className="Scene-layers">
        {width > sizes.md && <Aurora />}
        <div className="Scene-fullSize Scene-sun" />
        <div className="Scene-fullSize Scene-stars" />
        <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--back" />
        <div className="Scene-cloudsWrapper Scene-clouds Scene-clouds--front" />
        <div className="Scene-fullSize Scene-town" />
      </div>
      <div className="SceneOverlay">
        <img alt="FlutterVikings" className="SceneOverlay-logo" src="/assets/logo.svg" />
        <h1 className="font__caesar size__h1">Flutter Vikings</h1>
        <div className="SceneOverlay-slogan">
          The biggest <span className="font__caesar">Nordic</span> Flutter Conference!
          <br />
          <p className="SceneOverlay-date">2-3 Feb, 2022</p>
          <p className="SceneOverlay-location">Online</p>
        </div>
        <div className="SceneOverlay-info">
          <p className="SceneOverlay-location">
            <a
              className="Btn Btn--cfp Btn--cta"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/playlist?list=PL4dBIh1xps-Emd7K4xwX4rdUnfaKFMuna"
            >
              Youtube
            </a>{' '}
            or{' '}
            <a
              className="Btn Btn--cfp Btn--cta"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/flutterVikings"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export { Scene };
