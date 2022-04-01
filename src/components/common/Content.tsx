import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { VikingTheme } from '../../theme';
import { device } from '../../utils/media';

const ContentStyle = styled.div<{ theme: VikingTheme; color: string; center?: boolean }>`
  color: ${(data) => data.color};
  ${(data) => `font-size: ${data.theme.fontSize.small};`}
  ${(data) => data.center && 'text-align: center;'}

  h3 {
    padding: 1.5rem 0 0.5rem;
  }
  strong {
    ${(data) => `font-family: ${data.theme.fontFamily.headerFontFamily}`}
  }
  a.blue {
    ${(data) => `color: ${data.theme.colors.logoLightBlue};`};
  }
  @media ${device.laptop} {
    ${(data) => `font-size: ${data.theme.fontSize.base};`}
  }
`;

const Content = ({
  children,
  color,
  center = false,
}: {
  children: any;
  color?: string;
  center?: boolean;
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <ContentStyle
          theme={theme}
          color={color || theme.colors.grey.dark}
          center={center}
        >
          {children}
        </ContentStyle>
      )}
    </ThemeConsumer>
  );
};

export { Content };
