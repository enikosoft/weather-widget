import {QueryClient, useQuery} from 'react-query';
import {defer} from 'react-router-dom';

import {ExtractFnReturnType} from 'providers/ReactQueryProvider';

import {City} from 'types/city';

import {WEATHER_API_KEY, WEATHER_API_URL} from 'config/api';

import {weatherServer} from './axios';

const apiParams = (locations: string) => {
  return {
    key: WEATHER_API_KEY,
    unitGroup: 'metric',
    include: 'days,current,obs,noheaders,fcst,nonulls',
    iconSet: 'icons2',
    timezone: 'Z',
    elements:
      'sunsetEpoch,sunriseEpoch,icon,conditions,uvindex,visibility,pressure,winddir,windspeed,snow,dew,humidity,feelslike,temp,datetimeEpoch,tempmax,tempmin,temp,description',
    forecastDays: '1',
    aggregateHours: '24',
    combinationMethod: 'aggregate',
    contentType: 'json',
    locationMode: 'array',
    locations,
    shortColumnNames: 'false',
  };
};

// Doc:  https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
export const buildUrl = (locations: string) => {
  const params = apiParams(locations);

  return `${WEATHER_API_URL}weatherdata/forecast?${new URLSearchParams(params).toString()}`;
};

export const getCityWeather = (locations: string) => {
  const url = buildUrl(locations);
  if (locations) {
    return weatherServer.get(url);
  }

  return null;
};

type QueryFnType = typeof getCityWeather;

// for using query as hook
export const useFavoritesWeather = (cities: City[]) => {
  const locations = cities.map((city) => `${city.lat},${city.lng}`).join('|');
  console.log('locations22', locations);

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['weather-for-favorites'],
    queryFn: () => getCityWeather(locations),
    enabled: !!locations,
  });
};

export interface FavoriteLoader {
  favoritesPromise: ExtractFnReturnType<QueryFnType>;
}

// for using via react-router loader
export const favoritesListQuery = () => {
  const favoritesJSON = window.localStorage.getItem('favorites') || '{}';
  const cities = (JSON.parse(favoritesJSON)?.state?.favorites as City[]) || [];
  const locations = cities.map((city) => `${city.lat},${city.lng}`).join('|');

  console.log('locations', locations);
  return {
    queryKey: ['weather-for-favorites', locations],
    queryFn: () => getCityWeather(locations),
    enabled: !!locations,
  };
};

export const favoritesLoader = (queryClient: QueryClient) => async () => {
  return defer({
    favoritesPromise: queryClient.fetchQuery(favoritesListQuery()),
  });
};
