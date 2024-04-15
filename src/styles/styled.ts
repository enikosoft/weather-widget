/* eslint-disable @typescript-eslint/no-explicit-any */
import {createGlobalStyle} from 'styled-components';

export enum Theme {
  dark = 'dark',
  light = 'light',
}

export const mediaBreakpoints = {
  xs: 576,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

export const defaultTheme = {
  dark: {
    fontSize: '16px',
    fontFamily: 'var(--primaryFontFamily)',
    fontBoldFamily: 'var(--primaryBoldFamily)',
    background: 'var(--black)',
    color: 'var(--white)',
    navBg: '#202020',
    hoverNav: 'var(--primary-blue)',
    themeBtnBg: '#151515',
    scrollColor: 'var(--light-grey)',
    backgroundInput: '#1B1B1B',
    cardBg: '#26262A',
  },
  light: {
    fontSize: '18px',
    fontFamily: 'var(--primaryFontFamily)',
    fontBoldFamily: 'var(--primaryBoldFamily)',
    background: 'var(--white)',
    color: 'var(--black)',
    navBg: '#F0F0F0',
    hoverNav: 'var(--primary-blue)',
    themeBtnBg: '#F7F8FA',
    scrollColor: 'var(--black)',
    backgroundInput: '#F5F5F5',
    cardBg: 'var(--white)',
  },
};

export const GlobalStyle = createGlobalStyle`
  :root{
    --black: #101014;
    --white: #FFFFFF;
    --card-dark: #26262A;
    --card-light: #FFFFFF;

    --primary-blue: #0038FF;
    --light-grey: rgb(142 142 142);
    
    --primaryFontFamily: 'NotoSans Regular', sans-serif;
    --primaryBoldFamily: 'NotoSans Bold', sans-serif;

    /* width */
    --w-nav: 56px;

    /* height */
    --h-header: 100px;

    /* padding */
    --p-root-layout-xl: 40px;
    --p-root-layout-sm: 16px;

     /* border-radius */
     --radius-medium: 16px;
  }

  body {
    color: ${(props: any) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};;
  }
`;
