import React from 'react';
import styled, { DefaultTheme, ThemeConsumer } from 'styled-components';
import { useAllFiles } from '../../hooks/useAllFiles';
import { useSponsors } from '../../hooks/useSponsors';
import { RelativeDirectory } from '../../models/file';
import { Sponsor } from '../../models/Sponsor';
import { VikingTheme } from '../../theme';
import { Container, MainTitle, Section, FetchSvg } from '../common';
import { ResponsiveGrid } from '../common/ResponsiveGrid';
import { SponsorshipEmailLink } from './CommonSponsors';

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

const SponsorSection = styled.div`
  margin-bottom: 7rem;
`;

const SponsorCard = ({ theme, sponsor }: { theme: DefaultTheme; sponsor: Sponsor }) => {
  const darkPublicUrl =
    theme.isDark && sponsor.darkImage
      ? sponsor.darkImage?.publicURL
      : sponsor?.image?.publicURL;
  return darkPublicUrl ? (
    <a
      href={sponsor.link}
      target="_blank"
      title={sponsor.name}
      rel="noopener noreferrer nofollow"
    >
      <SponsorImage theme={theme}>
        <FetchSvg url={darkPublicUrl} />
      </SponsorImage>
    </a>
  ) : null;
};

const SponsorsLevel = ({
  list,
  title,
  theme,
  fill = 'auto-fill'
}: {
  list: Sponsor[];
  title: string;
  theme: DefaultTheme;
  fill?: string;
}) => {
  return (
    <SponsorSection>
      <SponsorHeadline>{title}</SponsorHeadline>
      <ResponsiveGrid fill={fill}>
        {list.map((sp) => (
          <SponsorCard key={sp.sponsor_id} theme={theme} sponsor={sp} />
        ))}
      </ResponsiveGrid>
    </SponsorSection>
  );
};

const Sponsors = () => {
  const images = useAllFiles(RelativeDirectory.sponsors);
  const sponsors = useSponsors(images);
  console.log(sponsors)
  const platinum = sponsors.filter((s) => s.level === 0);
  const gold = sponsors.filter((s) => s.level === 1);
  const silver = sponsors.filter((s) => s.level === 2);
  const bronze = sponsors.filter((s) => s.level === 3);
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Section bgColor={theme.colors.sectionHighLight}>
            <Container>
              <MainTitle title="Our Supporters" titleStrokeText={'sponsors'} />
              <SponsorsLevel title="Platinum" fill='none' list={platinum} theme={theme} />
              <SponsorsLevel title="Gold" list={gold} theme={theme} />
              <SponsorsLevel title="Silver" list={silver} theme={theme} />
              <SponsorsLevel title="Bronze" list={bronze} theme={theme} />
              <SponsorshipEmailLink />
            </Container>
          </Section>
        )}
      </ThemeConsumer>
    </>
  );
};

export { Sponsors };
