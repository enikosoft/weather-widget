import {LegacyRef, useLayoutEffect, useRef, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {mediaBreakpoints} from 'styles/styled';

import {useMobileMenu} from 'providers/MobileProvider';

import BurgerButton from './BurgerButton';
import BurgerNav from './BurgerNav';
import {items} from './utils';

export default function Nav() {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`,
  });

  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  useLayoutEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  // burger
  const ref = useRef() as LegacyRef<HTMLDivElement>;
  const {open, toggleMenu, closeMenu} = useMobileMenu();

  return mobileAndTablet ? (
    <div ref={ref}>
      <>
        <BurgerButton open={open} setOpen={toggleMenu} />
        <BurgerNav open={open} selectedMenu={selectedMenu} />
      </>
    </div>
  ) : (
    <StyledNav id="nav">
      <div className="logo">W.</div>
      <ul>
        {items.map((item) => (
          <li key={item.label} onClick={() => closeMenu()} className={selectedMenu === item.href ? 'active' : ''}>
            {item.children}
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  .logo {
    margin: 16px;
    margin-bottom: 40px;
    height: 32px;
    font-size: 24px;
    font-family: ${(props) => props.theme.fontBoldFamily};
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      width: 36px;
      height: 36px;

      a {
        height: 24px;
      }

      a svg {
        fill: ${(props) => props.theme.color};
      }

      &.active {
        background: var(--primary-blue);
      }

      &:hover {
        cursor: pointer;
        background: var(--primary-blue);
      }
    }
  }
`;
