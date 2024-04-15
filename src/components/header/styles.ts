import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const CityTitleStyled = styled.div`
  display: flex;
  align-items: center;
  width: auto;

  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    width: 100%;
    justify-content: space-between;
  }

  > div {
    display: flex;
    align-items: center;
  }

  .city-title-label {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${mediaBreakpoints.sm}px) {
      flex-direction: column;
      align-items: start;
    }
  }
  .marker-icon {
    font-size: 24px;
  }
`;

export const HeaderText = styled.p`
  background: inherit;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color};
  font-size: 32px;
  margin: 0;
  padding-left: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    font-size: 24px;
  }
`;

export const HeaderSubText = styled(HeaderText)`
  font-size: 18px;
  padding-bottom: 0px;
  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    font-size: 16px;
  }
`;
