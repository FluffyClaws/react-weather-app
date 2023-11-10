export interface WeatherResponse {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  name: string;
  weather: Array<{ description: string; icon: string }>;
  wind: {
    deg: number;
    speed: number;
  };
}

export interface WeatherData {
  temp: number;
  name: string;
  country: string;
  description: string;
  windDeg: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
  icon: string;
}

export interface WeatherCardProps {
  weather?: WeatherData | null;
  isLoading?: boolean;
}
export interface WeatherFormProps {
  onCitySubmit: (city: string) => void;
}
export type LastViewedCitiesProps = {
  onSelectCity: (city: string) => void;
  lastViewedCities: string[];
};
export type ThemeProperties = Record<string, string>;
