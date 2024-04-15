import {Suspense, useEffect} from 'react';
import {useQuery} from 'react-query';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';

import {useCityStore} from 'state/city';

import {CityWeatherLoader, cityWeatherQuery} from 'api/weather';

import {AppLoader} from 'components/app-loader/AppLoader';

import {mapApiWeatherDataToValues} from 'utils/weatherUtils';

import {DashboardLayout} from './DashboardLayout';

export default function Dashboard() {
  const navigate = useNavigate();
  const {cityWeatherPromise, cityTimeZonePromise} = useLoaderData() as CityWeatherLoader;

  const [city] = useCityStore((state) => [state.cityInContext]);

  useEffect(() => {
    if (!city) {
      navigate('/welcome');
    }
  }, []);

  return (
    <Suspense fallback={<AppLoader />}>
      <Await resolve={[cityWeatherPromise, cityTimeZonePromise]} errorElement={<div>Oops!</div>}>
        {() => {
          const {dataUpdatedAt, data, isLoading} = useQuery(cityWeatherQuery());
          const result = data && mapApiWeatherDataToValues(data?.data);

          if (isLoading) return <AppLoader />;
          if (!result) return null;

          return (
            city && (
              <DashboardLayout
                dataUpdatedAt={dataUpdatedAt}
                weather={result.weather}
                forecast={result.forecast}
                city={city}
              />
            )
          );
        }}
      </Await>
    </Suspense>
  );
}
