import styled from 'styled-components';

export const StyledOption = styled.li`
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0px 0px 0px 40px;

  &:hover {
    cursor: pointer;
  }

  .ellipsis {
    width: 100%;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.selected {
    color: var(--primary-blue);
  }
`;
