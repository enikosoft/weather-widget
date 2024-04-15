import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

export const StyledReactSearchAutocomplete = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  > .wrapper {
    display: flex;
    position: absolute;
    flex-direction: column;
    z-index: 100;
    border: ${(props) => props.theme.border};
    border-radius: var(--radius-medium);

    background-color: ${(props) => props.theme.backgroundInput};
    width: 100%;
    overflow: hidden;
    overflow: hidden;
    color: ${(props) => props.theme.color};
  }
`;

export const StyledResults = styled.div`
  padding: 0 24px 20px 0;

  > ul {
    margin: 0;
    padding: 0 0 16px 0;
    max-height: 200px;
    overflow: scroll;

    font-size: ${(props) => {
      if (props.theme.large) return '1.5em';

      return '1em';
    }};
    list-style-type: none;

    ::-webkit-scrollbar {
      width: 6px;
      height: 100%;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: ${(props) => props.theme.scrollColor};
    }

    > li {
      @media screen and (max-width: ${mediaBreakpoints.md}px) {
        padding-left: 24px;
      }
    }
  }
`;
