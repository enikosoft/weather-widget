import {Forecast} from './weather';

export interface City {
  id: string;
  name: string;
  fullAddress: string;
  lat: number;
  lng: number;
  countryName: string;
  countryCode: string;
  photos: string[];
  timezone: {
    timeZoneId: string;
    timeZoneName: string;
    gmt: string;
  };
}

export type FavoriteCity = City & Forecast;
