import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {useMobileMenu} from 'providers/MobileProvider';

import {useGoogleApiLoader} from 'hooks/useGoogleApiLoader';

import {useCityStore} from 'state/city';

import CitySelect from 'components/city-select/CitySelect';
import {ThemeButton} from 'components/theme-button/ThemeButton';

import {City} from 'types/city';

import {items} from './utils';

const BurgerNav = ({open, selectedMenu}: {open: boolean; selectedMenu: string}) => {
  const navigate = useNavigate();
  const {closeMenu} = useMobileMenu();

  const isLoaded = useGoogleApiLoader();

  const [setCity] = useCityStore((state) => [state.add]);

  const handleSelect = (value: City) => {
    setCity(value);
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/');
  };

  return (
    <StyledBurgerNavMenu $open={open} style={{top: window.scrollY}}>
      <Menu $open={open}>
        <ul>
          {items.map((item) => (
            <li onClick={() => closeMenu()} key={item.label} className={selectedMenu === item.href ? 'active' : ''}>
              {item.children}
            </li>
          ))}
        </ul>

        <ThemeButton />
      </Menu>

      <div>
        {isLoaded && (
          <div style={{width: '100%', height: '45px', padding: '0 16px', paddingLeft: '32px', marginTop: '16px'}}>
            <CitySelect onSelect={handleSelect} />
          </div>
        )}
      </div>
    </StyledBurgerNavMenu>
  );
};

export default BurgerNav;

const Menu = styled.div<{$open: boolean}>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px 0 90px;
  padding-top: calc(var(--h-header) / 2 - var(--p-root-layout-sm) - 8px);

  ul {
    display: flex;
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

        a svg {
          fill: white;
        }
      }

      &:hover {
        cursor: pointer;
        background: var(--primary-blue);
      }
    }
  }
`;

const StyledBurgerNavMenu = styled.nav<{$open: boolean}>`
  width: calc(100% + 16px);
  height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: ${({$open}) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  position: absolute;
  left: -16px;
  transition: transform 0.3s ease-in-out;
  z-index: 101;
  background-color: ${(props) => props.theme.background};
`;
