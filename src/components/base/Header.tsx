import React from 'react';
import styled from 'styled-components';
import config from '../../config';
import { Content } from '../common';

const HeaderWrapper = styled.header<{ banner?: string }>`
  position: relative;
  background-size: cover;
  padding: 8rem 2rem 10rem;
  text-align: center;
`;

interface Props {
  children: any;
  banner?: string;
}

const Header = (props: Props) => {
  return (
    <HeaderWrapper banner={props.banner || config.defaultBg}>
      <Content>{props.children}</Content>
    </HeaderWrapper>
  );
};

export { Header };
