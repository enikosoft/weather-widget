import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background: ${(props) => props.theme.cardBg};
  padding: ${(props) => props.theme.padding};
  border-radius: var(--radius-medium);
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.hoverBorder};
  border-color: ${(props) => props.theme.cardBg};
  -webkit-box-shadow: ${(props) => props.theme.boxShadow};
  -moz-box-shadow: ${(props) => props.theme.boxShadow};
  box-shadow: ${(props) => props.theme.boxShadow};
  &:hover {
    cursor: ${(props) => (props.theme.clickable ? 'pointer' : 'initial')};
    border: ${(props) => props.theme.hoverBorder};
    border-color: var(--light-grey);
  }

  .card-body {
    height: 100%;
  }
`;

export const CardTitle = styled.h2`
  font-size: ${(props) => props.theme.titleSize};
  padding-bottom: 12px;
  height: 30px;
  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    font-size: 14px;
  }
`;
