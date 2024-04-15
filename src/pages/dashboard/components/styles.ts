import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const DashboardLittleComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  height: 55px;

  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  > :last-child {
    width: 60%;
  }
  > .left-side {
    display: flex;
    align-items: baseline;
    margin: 0;
    padding-top: 10px;
    font-size: 24px;
    line-height: 20px;
    .value {
      font-size: 24px;
      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        margin-bottom: 20px;
        font-size: 28px;
        font-family: ${(props) => props.theme.fontBoldFamily};
      }
    }

    .value-humidity {
      padding-top: unset;
      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        margin-top: 16px;
      }
    }

    svg {
      font-size: 17px;
    }

    .value-label {
      color: var(--light-grey);
      font-size: 14px;
    }
  }

  > .right-side {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 50%;
    color: var(--light-grey);
    font-size: 14px;

    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      margin-bottom: unset;
      width: 100%;
    }

    svg {
      font-size: 48px;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const TimeWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  .city-time {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
    transform: translate(-50%, -50%);
    width: 100%;
    color: ${(props) => props.theme.color};
    text-align: center;

    .timer {
      font-size: 120px;
      font-family: ${(props) => props.theme.fontBoldFamily};

      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        font-size: 56px;
      }

      @media screen and (min-width: ${mediaBreakpoints.xl}px) and (max-width: ${mediaBreakpoints.lg}px) {
        font-size: 86px;
      }
    }

    .timezone {
      padding-top: 20px;
      font-size: 20px;
      font-family: ${(props) => props.theme.fontBoldFamily};

      &__id {
        margin-right: 20px;
      }

      &__name {
        padding-top: 5px;
        font-family: ${(props) => props.theme.fontFamily};
      }
    }
  }
`;

export const BackgroundImage = styled.div<{src: string}>`
  height: inherit;
  background: ${(props) => `url(${props.src}) no-repeat top center`};
  background-position: center;
  background-size: cover;
  opacity: 0.6;
`;
