export interface Forecast {
  maxTemp: number;
  minTemp: number;
  date: string;
  day: string;
  conditionIcon: string;
}

export interface Weather {
  temperature: number;
  feelslike: number;
  humidity: number;
  dew: number;
  winddir: number;
  windspeed: number;
  windgust: number;
  pressure: number;
  visibility: number;
  uvindex: number;
  datetimeEpoch: number;
  conditions: string;
  icon: string;
  sunriseEpoch: number;
  sunsetEpoch: number;
  description: string;
}
