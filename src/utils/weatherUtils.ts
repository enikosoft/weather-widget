/* eslint-disable @typescript-eslint/no-explicit-any */
import {DateTime} from 'luxon';

import {City, FavoriteCity} from 'types/city';
import {BulkWeatherData} from 'types/fetch-types';
import {Forecast, Weather} from 'types/weather';

export const mapApiWeatherDataToValues = (data: {
  currentConditions: any;
  description: string;
  days: any[];
}): {weather: Weather; forecast: Forecast[]} => {
  const fetchedCurrentConditions = data.currentConditions;

  const weather = {
    ...fetchedCurrentConditions,
    temperature: Math.floor(Math.round(fetchedCurrentConditions.temp)),
    feelslike: Math.floor(Math.round(fetchedCurrentConditions.feelslike)),
    dew: Math.floor(Math.round(fetchedCurrentConditions.dew)),
    description: data.description,
  };

  const forecast = data.days.slice(1).map((day) => {
    return {
      maxTemp: Math.floor(Math.round(day.tempmax)),
      minTemp: Math.floor(Math.round(day.tempmin)),
      date: DateTime.fromSeconds(day.datetimeEpoch).toFormat('dd LLL'),
      day: DateTime.fromSeconds(day.datetimeEpoch).toFormat('cccc'),
      conditionIcon: day.icon,
    };
  });

  return {weather, forecast};
};

export const mapApiWeatherDataToFavoritesValues = (data: BulkWeatherData, cities: City[]): FavoriteCity[] => {
  if (!data || !cities) return [];
  if (!data.locations || !data.locations.length) return [];

  return cities
    .map((city: City): FavoriteCity | null => {
      const currLocation = data?.locations.find((l) => l.id === `${city.lat},${city.lng}`);
      const fetchedCurrentConditions = currLocation?.currentConditions;
      const fetchedForecastDataOnToday = currLocation?.values?.[0];

      if (!fetchedCurrentConditions || !fetchedForecastDataOnToday) {
        return null;
      }

      const noCurrCond = !Object.keys(fetchedCurrentConditions).length;

      return {
        ...city,
        maxTemp: noCurrCond
          ? Math.floor(Math.round(fetchedForecastDataOnToday.temp))
          : Math.floor(Math.round(fetchedCurrentConditions.temp)),
        minTemp: Math.floor(Math.round(fetchedForecastDataOnToday.mint)),
        date: DateTime.fromISO(fetchedCurrentConditions.datetime).toFormat('dd LLL'),
        day: DateTime.fromISO(fetchedCurrentConditions.datetime).toFormat('cccc'),
        conditionIcon: fetchedCurrentConditions.icon,
      };
    })
    .filter((city): city is FavoriteCity => (city as FavoriteCity) !== null);
};
