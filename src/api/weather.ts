import {QueryClient, useQuery} from 'react-query';
import {defer} from 'react-router-dom';

import {ExtractFnReturnType} from 'providers/ReactQueryProvider';

import {City} from 'types/city';

import {WEATHER_API_KEY, WEATHER_API_URL} from 'config/api';

import {weatherServer} from './axios';

const apiParams = () => {
  return {
    key: WEATHER_API_KEY,
    unitGroup: 'metric',
    include: 'days,current,obs,noheaders,fcst,nonulls',
    iconSet: 'icons2',
    timezone: 'Z',
    elements:
      'sunsetEpoch,sunriseEpoch,icon,conditions,uvindex,visibility,pressure,winddir,windspeed,windgust,snow,dew,humidity,feelslike,temp,datetimeEpoch,tempmax,tempmin,temp,description',
  };
};

// Doc:  https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
export const buildUrl = (latitude: number, longitude: number, forecastParam = 'next7days') => {
  const params = apiParams();

  return `${WEATHER_API_URL}timeline/${latitude},${longitude}/${forecastParam}?${new URLSearchParams(
    params
  ).toString()}`;
};

export const getCityWeather = async (latitude: number, longitude: number) => {
  const url = buildUrl(latitude, longitude);
  const res = weatherServer.get(url);
  return res;
};

type QueryFnType = typeof getCityWeather;

// for using query as hook
export const useCityWeather = (latitude: number, longitude: number, city: string, country: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['weather', city, country],
    queryFn: () => getCityWeather(latitude, longitude),

    enabled: !!(latitude && longitude),
  });
};

export interface CityWeatherLoader {
  cityWeatherPromise: ExtractFnReturnType<QueryFnType>;
  cityTimeZonePromise: ExtractFnReturnType<QueryFnType>;
}

// for using via react-router loader
export const cityWeatherQuery = () => {
  const city = (JSON.parse(window.sessionStorage.getItem('selectedCity') || '')?.state as City) || undefined;

  return {
    queryKey: ['weather', city?.name, city?.countryName],
    queryFn: () => city && getCityWeather(city.lat, city.lng),
    enabled: !!city,
  };
};

export const cityWeatherLoader = (queryClient: QueryClient) => async () => {
  return defer({
    cityWeatherPromise: queryClient.fetchQuery(cityWeatherQuery()),
    cityTimeZonePromise: queryClient.fetchQuery(cityWeatherQuery()),
  });
};
