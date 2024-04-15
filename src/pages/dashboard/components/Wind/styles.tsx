import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .wind-data {
    width: 100%;
    .wind-data-row {
      display: flex;
      justify-content: start;
      align-items: end;
      width: 90%;
      &:first-child {
        border-bottom: 1px solid var(--light-grey);
        padding-bottom: 16px;
      }
      .row-value {
        display: flex;
        align-items: center;
        margin-right: 8px;
        font-size: 28px;
      }
      .row-label {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        .row-label-subtext {
          color: var(--light-grey);
          font-size: 12px;
        }
      }
    }
  }

  .compass-wrapper {
    position: relative;
    width: 100px;
    height: 100px;
    @media screen and (min-width: ${mediaBreakpoints.xxl}px) {
      width: 120px;
      height: 120px;
    }

    @media screen and (max-width: ${mediaBreakpoints.xl}px) {
      width: 120px;
      height: 120px;
    }

    .label {
      display: flex;
      position: absolute;
      top: 50%;
      left: 50%;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      z-index: 10;
      background: ${(props) => props.theme.cardBg};
      height: 30px;
      span {
        width: 32px;
        text-align: center;
      }
    }
    .compass {
      width: 100%;
      height: 100%;
    }

    .arrow-wrapper {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100px;
      @media screen and (min-width: ${mediaBreakpoints.xxl}px) {
        width: 120px;
        height: 120px;
      }

      @media screen and (max-width: ${mediaBreakpoints.xl}px) {
        width: 120px;
        height: 120px;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  > .labels {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & :first-child {
      padding-right: 5px;
    }
    > p {
      margin-left: 5px;
      color: var(--light-grey);
      font-size: 18px;
      line-height: 24px;
    }

    > p.wind-speed {
      margin: 0;
      font-size: 25px;
      line-height: 20px;
    }
  }
`;

export const WindDirectionImage = styled.div<{direction: number}>`
  width: 30%;
  height: 50%;
  display: flex;
  margin: auto;
  transform: rotate(${(props) => props.direction}deg);

  > div {
    > svg {
      width: inherit;
      height: inherit;
    }
  }
`;
