import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

import logo from 'assets/images/SearchBackground-1.jpg';

export const WelcomeLayout = styled.div`
  background: url(${logo});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  height: 100vh;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.37);
    width: inherit;
    height: inherit;
    content: '';
  }

  .nav-block {
    display: inherit;
    justify-content: space-between;
    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      flex-direction: column;
    }

    .account-block {
      display: inherit;
      justify-content: inherit;

      @media screen and (max-width: ${mediaBreakpoints.xs}px) {
        min-width: 100%;
      }

      @media screen and (min-width: ${mediaBreakpoints.xs}px) {
        min-width: 350px;
      }

      @media screen and (min-width: ${mediaBreakpoints.lg}px) {
        min-width: 350px;
      }
    }
  }

  .app-name {
    font-size: 80px;

    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      font-size: 36px;
    }

    @media screen and (min-width: ${mediaBreakpoints.xs}px) {
      font-size: 56px;
    }

    @media screen and (min-width: ${mediaBreakpoints.lg}px) {
      font-size: 80px;
    }
  }

  .app-name-subtitle {
    line-height: 30px;
    margin-bottom: 40px;
    @media screen and (max-width: ${mediaBreakpoints.xs}px) {
      font-size: 18px;
    }

    @media screen and (min-width: ${mediaBreakpoints.xs}px) {
      font-size: 24px;
    }

    @media screen and (min-width: ${mediaBreakpoints.lg}px) {
      font-size: 28px;
    }
  }

  .app-search {
    display: flex;
    .search {
      flex-grow: 1;
      max-width: 480px;
      height: 45px;
      > div .wrapper {
        max-width: 480px;
        height: auto;

        input {
          background-color: var(--white);
          color: var(--black);
        }

        svg {
          color: var(--black);
        }

        > div {
          &:last-child {
            background-color: var(--white);
            color: var(--black);
          }
        }
      }
    }

    .determine-location {
      display: inherit;
      justify-content: flex-end;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-left: 40px;
        border: none;
        border-radius: 100%;
        width: 45px;
        height: 45px;
        background: var(--white);
        svg {
          font-size: 24px;
          color: var(--black);
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: ${mediaBreakpoints.xs}px) {
    padding: 88px 24px;
  }

  @media screen and (min-width: ${mediaBreakpoints.lg}px) {
    padding: 105px 88px;
  }
`;

export const CenteredWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 520px;

  @media screen and (max-width: ${mediaBreakpoints.md}px) {
    top: 45%;
  }

  > div {
    max-width: inherit;
  }
`;
