export interface BulkWeatherData {
  locations: {
    id: string;
    currentConditions: {
      temp: number;
      datetime: string;
      icon: string;
    };
    values: {
      temp: number;
      mint: number;
    }[];
  }[];
}
