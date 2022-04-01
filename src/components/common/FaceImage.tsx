import React from 'react';
import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image';
import styled, { ThemeConsumer } from 'styled-components';
import { People } from '../../models/People';
import { VikingTheme } from '../../theme';

const PhotoTitle = styled.h3`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  padding: 5px;

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const PhotoFilter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
    150deg,
    rgba(83, 246, 198, 0.3),
    rgba(7, 198, 249, 0.3),
    rgba(5, 87, 153, 0.6)
  );
  cursor: pointer;
`;

const PhotoBloc = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease;
`;

const PhotoWrapper = styled.div<{ theme: VikingTheme }>`
  position: relative;
  :hover {
    ${PhotoFilter} {
      opacity: 1;
      background-image: none;
    }
    ${PhotoTitle} {
      transition: background 1s cubic-bezier(0.23, 1, 0.32, 1);
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const FaceImage = ({ member, fixed }: { member: People; fixed?: boolean }) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <PhotoWrapper theme={theme}>
          {fixed ? (
            <GatsbyImage fixed={member.image.fixed} />
          ) : (
            <GatsbyImage fluid={member.image.fluid} />
          )}
          <PhotoBloc>
            <PhotoFilter />
            <PhotoTitle>{member.name}</PhotoTitle>
          </PhotoBloc>
        </PhotoWrapper>
      )}
    </ThemeConsumer>
  );
};

export const ImageWrapper = ({
  image,
  fixed,
}: {
  image: { fixed: FixedObject; fluid: FluidObject };
  fixed?: boolean;
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <PhotoWrapper theme={theme}>
          {fixed ? (
            <GatsbyImage fixed={image.fixed} />
          ) : (
            <GatsbyImage fluid={image.fluid} />
          )}
          <PhotoBloc>
            <PhotoFilter />
            {/* <PhotoTitle>{member.name}</PhotoTitle> */}
          </PhotoBloc>
        </PhotoWrapper>
      )}
    </ThemeConsumer>
  );
};
