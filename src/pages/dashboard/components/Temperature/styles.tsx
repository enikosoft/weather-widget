import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const Wrapper = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .col {
      &:first-child {
        width: 60%;
      }

      &:last-child {
        width: 40%;
      }

      .temperature {
        padding-bottom: 16px;
        min-width: 130px;
        font-size: 64px;
        line-height: 65px;
        font-family: ${(props) => props.theme.fontBoldFamily};

        @media screen and (max-width: ${mediaBreakpoints.sm}px) {
          font-size: 60px;
        }
      }

      .condition_icon {
        display: flex;
        justify-content: center;
        align-items: center;
        /* position: absolute;
        top: 40px; */
        height: 124px;
      }
    }
  }

  .description {
    border-bottom: 1px solid rgba(138, 138, 138, 0.28);
    padding: 16px 0 16px 0;
    color: var(--light-grey);
    font-size: 16px;
    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      font-size: 14px;
    }
  }

  .conditions {
    font-size: 24px;
    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      font-size: 18px;
    }
  }

  .time-row {
    padding-top: 24px;

    div {
      display: flex;
      align-items: center;
      font-size: 14px;
      svg {
        margin-right: 4px;
        font-size: 16px;
      }
    }

    div.updatedAt-time {
      font-size: 18px;
      font-family: ${(props) => props.theme.fontBoldFamily};
    }
  }
`;
