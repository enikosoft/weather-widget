import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const DEFAULT_YELLOW = '#ffe600';

export interface SunRiseTheme {
  width: string;
  height: string;
  sunAnimationValue: number;
  sunIconSize: number;
  color?: string;
  fontFamily?: string;
  boldFontFamily?: string;
}

export const Wrapper = styled.div`
  position: relative;

  /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    max-width: 135px;
  } */

  .sun-animation {
    position: absolute;
    transition: width 2s linear;
    background-color: rgba(255, 255, 0, 0.4);
    height: ${(props) => props.theme.height};
  }

  .sun-widget {
    display: flex;
    position: relative;
    justify-content: center;
    margin: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    width: ${(props) =>
      `calc(${props.theme.width} + 50px)`}; // 50px - sun zone wrapper zone must be larger than sun zone
    height: ${(props) => `calc(${props.theme.height} / 2)`};
    overflow: hidden;

    /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      max-width: 135px;
    } */

    div > .legend-horisont {
      position: absolute;
      bottom: 0;
      left: 20px;
      border: none;
      border-top: 5px solid;
      border-color: ${() => DEFAULT_YELLOW};
      width: 20px;

      /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        left: 0;
      } */
    }

    div > .legend-horisont-sunset {
      right: 20px;
      left: unset;
      /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        right: 0;
      } */
    }

    .sun-zone {
      position: relative;
      margin: inherit;
      border: 2px dashed var(--light-grey);
      border-radius: 50%;
      width: ${(props) => props.theme.width};
      height: ${(props) => props.theme.height};
      overflow: hidden;
    }

    .sun-path {
      display: flex;
      position: absolute;
      justify-content: center;
      max-width: 50px;
      height: ${(props) => props.theme.height};
      color: ${() => DEFAULT_YELLOW};

      .sun-icon {
        position: relative;
        top: -10px;
        width: ${(props) => `${props.theme.sunIconSize}px`};
        height: ${(props) => `${props.theme.sunIconSize}px`};
        font-size: ${(props) => `${props.theme.sunIconSize}px`};
      }
    }

    .sun-animation {
      position: absolute;
      -webkit-transition: width 2s linear;
      transition: width 2s linear;
      background: linear-gradient(180deg, rgba(255, 230, 0, 0.12) 0%, rgba(255, 230, 0, 0) 100%);
      width: ${(props) => `calc(${props.theme.sunAnimationValue}px - 25px + ${props.theme.sunIconSize / 2}px )`};
      height: ${(props) => props.theme.height};
      overflow: hidden;

      /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        width: ${(props) => `calc(${props.theme.sunAnimationValue}px + ${props.theme.sunIconSize / 2}px )`};
      } */

      &:before {
        display: block;
        position: relative;
        top: 0px;
        border: 3px solid yellow;
        border-color: ${() => DEFAULT_YELLOW};
        border-radius: 50%;
        width: ${(props) => `calc(${props.theme.width} - 10px)`};
        height: ${(props) => `calc(${props.theme.height} - 10px)`};
        content: '';
      }
    }
  }

  .legend {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    width: ${(props) =>
      `calc(${props.theme.width} + 50px)`}; // 50px - sun zone wrapper zone must be larger than sun zone
    width: 200px;
    font-size: 14px;

    /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      max-width: 135px;
    } */

    .legend-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: auto;
      width: 170px;

      /* @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        max-width: 135px;
      } */

      > div {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: start;
        width: 80px;

        .icon {
          width: 24px;
          height: 24px;
        }

        .label {
          color: ${() => DEFAULT_YELLOW};
          line-height: 12px;
        }

        .time {
          color: ${(props) => props.theme.color};
          line-height: 20px;
        }
      }

      > .sunset {
        align-items: end;

        .label {
          text-align: right;
        }
      }
    }
  }
`;
