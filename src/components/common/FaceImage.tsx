import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { VikingTheme } from '../../theme';
import { TitoSpeaker } from '../../hooks/useTito';

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

const PhotoFilter = styled.div<{ withFilter: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 8px;
  flex-direction: column;
  justify-content: flex-end;
  ${(props) =>
    !props.withFilter
      ? `background: none;`
      : `background-image: linear-gradient(
    150deg,
    rgba(83, 246, 198, 0.3),
    rgba(7, 198, 249, 0.3),
    rgba(5, 87, 153, 0.6)
  );`}
  cursor: pointer;
`;

const PhotoBloc = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.2s ease;
`;

const PhotoWrapper = styled.div<{ theme: VikingTheme; withFilter: number }>`
  position: relative;
  img {
    ${(props) => (!props.withFilter ? `filter: none;` : `filter: grayscale(1);`)}
  }
  :hover {
    img {
      filter: none;
    }
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

export const FaceImage = ({
  member,
  withFilter = true,
}: {
  member: TitoSpeaker;
  withFilter?: boolean;
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <PhotoWrapper theme={theme} withFilter={withFilter ? 1 : 0}>
          <img src={member.profilePicture} alt={member.fullName} />
          <PhotoBloc>
            <PhotoFilter withFilter={withFilter ? 1 : 0} />
            <PhotoTitle>{member.fullName}</PhotoTitle>
          </PhotoBloc>
        </PhotoWrapper>
      )}
    </ThemeConsumer>
  );
};

export const ImageWrapper = ({
  image,
}: {
  image: string;
}) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <PhotoWrapper theme={theme} withFilter={1}>
          <img src={image} />
          <PhotoBloc>
            <PhotoFilter withFilter={1} />
            {/* <PhotoTitle>{member.name}</PhotoTitle> */}
          </PhotoBloc>
        </PhotoWrapper>
      )}
    </ThemeConsumer>
  );
};
