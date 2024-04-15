import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const GridDashboard = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;

  .main-grid-card {
    grid-row: span 2;

    > div {
      height: 100%;
    }
  }

  .grid-item {
    width: auto;
    min-width: 220px;
    max-height: 200px;

    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      max-height: 200px;
    }

    > div {
      height: 100%;
    }
  }

  .grid-item-small {
    max-height: 100px;

    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      max-height: unset;
    }
  }

  .bottom-grid-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-column: span 4;
    gap: 24px;

    .time-grid-card {
      grid-column: span 3;
    }
  }

  @media screen and (min-width: ${mediaBreakpoints.sm}px) and (max-width: ${mediaBreakpoints.xl}px) {
    grid-template-rows: 2fr 2fr 2fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;

    .main-grid-card {
      grid-row: span 4;
      grid-column: span 3;
    }

    .bottom-grid-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column: span 3;
      gap: 24px;

      .forecast-grid-card {
        grid-column: span 3;
      }
      .time-grid-card {
        grid-column: span 3;
        height: 500px;
      }
    }
  }

  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    grid-template-rows: 1fr;

    grid-template-columns: 1fr 1fr;
    gap: 16px;
    max-height: unset;
    .main-grid-card {
      grid-column: span 2;
      max-width: 100%;
    }
    .grid-item {
      min-width: unset;
    }
    .bottom-grid-row {
      grid-template-columns: 1fr;
      grid-column: span 2;

      .forecast-grid-card {
        grid-column: span 3;
      }
      .time-grid-card {
        grid-column: span 3;
        height: 300px;
      }
    }
  }
`;
