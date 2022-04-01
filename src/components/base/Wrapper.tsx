import styled from 'styled-components';
import { device } from '../../utils/media';

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props) => (props.fullWidth ? '100%' : '100rem')};
  padding: ${(props) => (props.fullWidth ? '0' : '0 6rem')};
  @media ${device.tablet} {
    padding: ${(props) => (props.fullWidth ? '0' : '0 3rem')};
  }
  @media ${device.phone} {
    padding: ${(props) => (props.fullWidth ? '0' : '0 1rem')};
  }
`;
