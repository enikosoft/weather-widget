import {useEffect, useState} from 'react';
import {FaLocationCrosshairs} from 'react-icons/fa6';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import {mediaBreakpoints} from 'styles/styled';

import {useGoogleApiLoader} from 'hooks/useGoogleApiLoader';

import {useCityStore} from 'state/city';

import {detectLocation} from 'api/currentLocation';

import {AppLoader} from 'components/app-loader/AppLoader';
import CitySelect from 'components/city-select/CitySelect';

import {City} from 'types/city';

import {CenteredWrapper, WelcomeLayout} from './styles';

import logo from 'assets/images/SearchBackground-1.jpg';

export const Welcome = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.md}px)`,
  });
  const navigate = useNavigate();

  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
  const setCity = useCityStore((state) => state.add);

  useEffect(() => {
    const img = new Image();

    const timer = setTimeout(() => {
      img.src = logo;

      img.onload = () => {
        setBackgroundLoaded(true);
      };
    }, 1000);

    return () => {
      img.onload = null;
      clearTimeout(timer);
    };
  }, []);

  const isLoaded = useGoogleApiLoader();

  const handleDetectLocation = async () => {
    await detectLocation(fetchCityFromLocation);
  };

  const fetchCityFromLocation = (city: City | null) => {
    if (city) {
      setCity(city);
      navigate('/');

      return;
    }
  };

  if (!backgroundLoaded) {
    return <AppLoader />;
  }

  return (
    <WelcomeLayout>
      <CenteredWrapper>
        <h1 className="app-name">UrbanClimaClock</h1>
        <h3 className="app-name-subtitle">
          Embark on a journey through urban life, where time and weather unfold harmoniously! Find a settlement or
          determine your location.
        </h3>

        <div className="app-search">
          <div className="search">
            {isLoaded && (
              <CitySelect showInputSearchIcon={!mobileAndTablet} mobileAndTablet onSelect={fetchCityFromLocation} />
            )}
          </div>
          <div className="determine-location">
            <button onClick={handleDetectLocation}>
              <FaLocationCrosshairs />
            </button>
          </div>
        </div>
      </CenteredWrapper>
    </WelcomeLayout>
  );
};

export default Welcome;
