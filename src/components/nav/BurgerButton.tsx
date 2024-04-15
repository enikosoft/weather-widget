import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

const BurgerButton = ({open, setOpen}: {open: boolean; setOpen: (open: boolean) => void}) => {
  return (
    <StyledBurgerButton aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} $open={open}>
      <span />
      <span />
      <span />
    </StyledBurgerButton>
  );
};

export default BurgerButton;

export const StyledBurgerButton = styled.button<{$open: boolean}>`
  position: fixed;
  left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 102;

  @media screen and (max-width: ${mediaBreakpoints.lg}px) {
    top: calc(var(--h-header) / 2 - var(--p-root-layout-sm));
    left: var(--p-root-layout-sm);
  }

  span {
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    border-radius: 10px;
    background: ${({theme}) => theme.color};
    width: 2rem;
    height: 0.25rem;

    &:first-child {
      transform: ${({$open}) => ($open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({$open}) => ($open ? 'translateX(20px)' : 'translateX(0)')};
      opacity: ${({$open}) => ($open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${({$open}) => ($open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
