import {Suspense, useEffect} from 'react';
import {useQuery} from 'react-query';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';

import {useCityStore} from 'state/city';
import {useFavoritesStore} from 'state/favorites';

import {FavoriteLoader, favoritesListQuery} from 'api/bulkWeather';

import {AppLoader} from 'components/app-loader/AppLoader';

import {mapApiWeatherDataToFavoritesValues} from 'utils/weatherUtils';

import {FavoriteLayout} from './FavoriteLayout';

export const Favorite = () => {
  const navigate = useNavigate();
  const {favoritesPromise} = useLoaderData() as FavoriteLoader;

  const favorites = useFavoritesStore((state) => state.favorites);
  const clear = useCityStore((state) => state.clear);

  useEffect(() => {
    clear();
  }, []);

  useEffect(() => {
    if (!favorites.length) {
      navigate('/welcome');
    }
  }, [favorites]);

  return (
    <Suspense fallback={<AppLoader />}>
      <Await resolve={favoritesPromise} errorElement={<div>Oops!</div>}>
        {() => {
          const {data, isLoading} = useQuery(favoritesListQuery());

          if (isLoading) return <AppLoader />;

          const favoritesList = (data && mapApiWeatherDataToFavoritesValues(data?.data, favorites)) || [];

          if (!favoritesList) return null;

          return <FavoriteLayout favorites={favoritesList} />;
        }}
      </Await>
    </Suspense>
  );
};
