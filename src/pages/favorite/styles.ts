import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const StyledFavoriteWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media screen and (min-width: ${mediaBreakpoints.sm}px) and (max-width: ${mediaBreakpoints.xxl}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${mediaBreakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledFavoriteCard = styled.div`
  display: flex;
  flex-direction: row;

  .city-photo {
    border-radius: 12px;
    max-width: 250px;
    max-height: 150px;
    overflow: hidden;

    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      max-width: 150px;
      max-height: 150px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .city-info {
    display: inherit;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 24px;
    width: calc(100% - 145px);
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};

    .city-info-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      font-size: 24px;

      .city-info-title {
        display: flex;
        flex-direction: column;
        @media screen and (max-width: ${mediaBreakpoints.sm}px) {
          font-size: 18px;
        }
        > span:last-child {
          width: 150%;
          padding-top: 8px;
          color: var(--light-grey);
          font-size: 18px;
          @media screen and (max-width: ${mediaBreakpoints.sm}px) {
            font-size: 14px;
          }
        }
      }
    }

    .weather-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        font-size: 20px;
      }

      @media screen and (max-width: ${mediaBreakpoints.sm}px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: start;
      }

      .weather {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 140px;

        .forecast-icon {
          max-width: 45px;
        }
        .forecast-temperature {
          span {
            color: var(--light-grey);
            font-size: 18px;
          }
        }
      }

      .forecast-date {
        position: relative;
        min-width: 140px;
        height: 50px;
        > div > div > div {
          @media screen and (max-width: ${mediaBreakpoints.sm}px) {
            padding-left: 8px;
            font-size: 20px;
            text-align: left;
            font-family: ${(props) => props.theme.fontFamily};
          }
        }

        @media screen and (max-width: ${mediaBreakpoints.sm}px) {
          height: 24px;
        }
      }
    }
  }
`;
