import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const Wrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  font-size: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .forecast-controls {
    padding-bottom: 32px;
  }

  .forecast-table {
    table {
      width: 100%;
    }
    div &-temperature {
      font-size: 24px;
      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        font-size: 18px;
      }
      span {
        color: var(--light-grey);
        font-size: 16px;
        @media screen and (max-width: ${mediaBreakpoints.sm}px) {
          font-size: 14px;
        }
      }
    }

    div &-date,
    div &-day {
      color: var(--light-grey);
      font-size: 20px;

      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        font-size: 14px;
      }
    }
  }
`;
