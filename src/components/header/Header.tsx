import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import {mediaBreakpoints} from 'styles/styled';

import {useMobileMenu} from 'providers/MobileProvider';

import {useGoogleApiLoader} from 'hooks/useGoogleApiLoader';

import {useCityStore} from 'state/city';

import CitySelect from 'components/city-select/CitySelect';
import {ThemeButton} from 'components/theme-button/ThemeButton';

import {City} from 'types/city';

import {CityTitle} from './CityTitle';

const Header = () => {
  const isLoaded = useGoogleApiLoader();
  const navigate = useNavigate();

  const [city, setCity] = useCityStore((state) => [state.cityInContext, state.add]);
  const {closeMenu} = useMobileMenu();

  const desktop = useMediaQuery({
    query: `(min-width: ${mediaBreakpoints.lg}px)`,
  });

  const handleSelect = (item: City) => {
    setCity(item);
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('/');
  };

  return (
    <header id="header">
      {city ? <CityTitle city={city} /> : <h2>Your favorites</h2>}

      {isLoaded && desktop && (
        <div style={{flexGrow: 1, maxWidth: '450px'}}>
          <div style={{height: '45px', margin: city ? 'auto' : 'unset'}}>
            <CitySelect onSelect={handleSelect} />
          </div>
        </div>
      )}

      {desktop && <ThemeButton />}
    </header>
  );
};

export default Header;
