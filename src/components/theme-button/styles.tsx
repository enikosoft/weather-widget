import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  #btn {
    display: inherit;
    position: relative;
    align-items: center;
    border-radius: 60px;
    background: ${(props) => props.theme.themeBtnBg};
    padding: 9px;
    width: 296px;
    height: 50px;

    @media screen and (max-width: ${mediaBreakpoints.lg}px) {
      width: 120px;
    }
  }
`;

export const Button = styled.div<{$isDark: boolean}>`
  width: 50%;
  display: flex;
  align-items: center;
  height: 32px;
  justify-content: center;
  opacity: 0.5;

  .label {
    padding-bottom: 5px;
    padding-left: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    font-family: var(--primaryBoldFamily);
  }

  &.active {
    opacity: 1;
    box-shadow:
      0px 4px 8px -4px rgba(0, 0, 0, 0.25),
      inset 0px -1px 1px rgba(0, 0, 0, 0.49),
      inset 0px 2px 1px rgba(255, 255, 255, 0.06);
    border-radius: 32px;
    background: ${(props) => {
      if (props.$isDark) return '#2C2C2C';
      return 'var(--white)';
    }};
    color: ${(props) => props.theme.color};
  }

  &:hover {
    cursor: pointer;
  }
`;
