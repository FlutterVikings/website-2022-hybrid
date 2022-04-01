import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import config from '../../config';
import { Sponsor } from '../../models/Sponsor';
import { VikingTheme } from '../../theme';
import { Content, FetchSvg } from '../common';
import { ResponsiveGrid } from '../common/ResponsiveGrid';

const SponsorImage = styled.div<{ theme: VikingTheme }>`
  height: 6rem;
  padding: 1rem;
  margin-right: 1rem;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  align-items: center;

  svg {
    height: 4rem;
    width: 100%;
  }
  g,
  path.dark {
    fill: ${(props) =>
      props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  }
  :hover {
    transition: all 0.1s linear;
    border: 1px solid ${(props) => props.theme.colors.logoLightBlue};
  }
`;

const SponsorHeadline = styled.h2`
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  text-align: center;
`;

const SponsorNameLink = styled.a`
  color: ${(props) =>
    props.theme.isDark ? props.theme.colors.white : props.theme.colors.black};
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 1.8rem;
  h3 {
    font-family: '${(props) => props.theme.fontFamily.headerFontFamily}';
  }
`;

const SponsorSection = styled.div`
  margin-bottom: 7rem;
`;

const SponsorCard = ({ theme, sponsor }: { theme: DefaultTheme; sponsor: Sponsor }) => {
  const hasSVGImage =
    sponsor.image?.publicURL && sponsor.image.publicURL.endsWith('.svg');
  const hasImage = sponsor.image?.publicURL;
  return (
    <SponsorNameLink
      href={sponsor.link}
      target="_blank"
      title={sponsor.name}
      rel="noopener noreferrer nofollow"
    >
      <SponsorImage theme={theme}>
        {hasSVGImage ? (
          <FetchSvg url={sponsor.image.publicURL} />
        ) : hasImage ? (
          <img src={sponsor.image.publicURL} alt={sponsor.name} />
        ) : (
          <h3>{sponsor.name}</h3>
        )}
      </SponsorImage>
    </SponsorNameLink>
  );
};

export const SponsorsLevel = ({
  list,
  title,
  theme,
}: {
  list: Sponsor[];
  title: string;
  theme: DefaultTheme;
}) => {
  return (
    <SponsorSection>
      <SponsorHeadline>{title}</SponsorHeadline>
      <ResponsiveGrid size={21}>
        {list.map((sp) => (
          <SponsorCard key={sp.id} theme={theme} sponsor={sp} />
        ))}
      </ResponsiveGrid>
    </SponsorSection>
  );
};

export const SponsorshipEmailLink = ({ title }: { title?: string }) => {
  return (
    <Content center={true}>
      <div className="CTA-actions">
        <h3>{title ? title : 'Thinking to become sponsor?'}</h3>
        <br />
        <a
          className="Btn Btn--cfp"
          target="_blank"
          rel="noopener noreferrer"
          href={`mailto:${config.email}`}
        >
          team@fluttervikings.com
        </a>
      </div>
    </Content>
  );
};
