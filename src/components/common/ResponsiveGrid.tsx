import styled from 'styled-components';

export const ResponsiveGrid = styled.div<{ size?: number; fill?: string }>`
  --auto-grid-min-size: ${(props) => (props.size ? props.size : '10')}rem;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.fill ? props.fill : 'auto-fill')},
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;

  @media (min-width: 1024px) {
    --auto-grid-min-size: ${(props) => (props.size ? props.size : '16')}rem;
  }
`;
