import { VikingTheme } from './theme';

declare const graphql: (query: TemplateStringsArray) => void;

declare module 'styled-components' {
  export interface DefaultTheme extends VikingTheme {}
}
