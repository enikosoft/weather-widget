import styled from 'styled-components';

export const SuffixWrapper = styled.div`
  font-size: 24px;
  position: absolute;
  left: 10px;
  top: 10px;

  svg {
    margin: auto;
    color: ${(props) => props.theme.color};
  }
`;

export const StyledSearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.height};
  min-width: ${(props) => props.theme.minWidth};
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: inherit;
  font-size: 16px;
  color: ${(props) => props.theme.color};

  > input {
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 10px 0 40px;

    width: 100%;
    height: inherit;
    height: 45px;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
  }
`;
