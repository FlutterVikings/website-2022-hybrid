import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const SectionStyle = styled.section<{ bgColor: string }>`
  padding: 3rem 1rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  background: ${(data) => data.bgColor};
`;

const Section = ({
  children,
  bgColor,
  className,
}: {
  children: any;
  bgColor?: string;
  className?: string;
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <SectionStyle className={className} bgColor={bgColor || theme.colors.sectionbg}>
          {children}
        </SectionStyle>
      )}
    </ThemeConsumer>
  );
};

export { Section };
