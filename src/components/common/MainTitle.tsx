import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { VikingTheme } from '../../theme';
import { device } from '../../utils/media';

const TitleStroke = styled.p<{ theme: VikingTheme }>`
  opacity: 0.3;
  text-transform: lowercase;
  position: absolute;
  font-size: ${(data) => ` ${data.theme.fontSize.xxl}`};
  ${(data) => `font-family: ${data.theme.fontFamily.headerFontFamily};`}
  ${(data) => `color: ${data.theme.colors.grey.ultraLight};`}

  @supports (-webkit-text-stroke: 1px black) {
    opacity: 1;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(data) => data.theme.colors.grey.ultraLight};
  }

  @media ${device.laptop} {
    font-size: ${(data) => data.theme.fontSize.xxxl};
  }
`;

const TitleWrapper = styled.div`
  padding: 5rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleHeader = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-weight: 700;
  font-size: ${(data) => data.theme.fontSize.medium};
  color: ${(data) => data.theme.colors.grey.dark};

  @media ${device.laptop} {
    font-size: ${(props) => props.theme.fontSize.big};
  }
`;
const TitleDivider = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="11">
      <path
        fillRule="evenodd"
        fill={color}
        d="M59.669 10.71L49.164 3.306l-9.736 7.375-9.714-7.359-9.708 7.36-9.711-7.36-9.11 6.906-1.195-1.65L10.295.765l9.711 7.36 9.708-7.36 9.714 7.36L49.122.781 59.68 8.223l10.178-7.031 1.124 1.703-11.313 7.815z"
      />
    </svg>
  );
};

interface MainTitleProps {
  titleStrokeText: string;
  title: string;
}

const MainTitle = ({ title, titleStrokeText }: MainTitleProps) => {
  return (
    <>
      <ThemeConsumer>
        {(theme) => {
          return (
            <>
              <TitleWrapper>
                <TitleStroke theme={theme}>{titleStrokeText}</TitleStroke>
                <TitleHeader theme={theme}>
                  {title}
                  <TitleDivider color={theme.colors.grey.dark} />
                </TitleHeader>
              </TitleWrapper>
            </>
          );
        }}
      </ThemeConsumer>
    </>
  );
};

export { MainTitle };
