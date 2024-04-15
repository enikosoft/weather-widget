import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: string;
    fontFamily: string;
    fontBoldFamily: string;
    background: string;
    color: string;
    navBg: string;
    hoverNav: string;
    themeBtnBg: string;
    scrollColor: string;
    backgroundInput: string;
    cardBg: string;
  }
}
