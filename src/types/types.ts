export interface WeatherResponse {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
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
  description: string;
  windDeg: number;
  windSpeed: number;
  pressure: number;
  humidity: number;
  icon: string;
}

export interface WeatherCardProps {
  weather: WeatherData;
}
export interface WeatherFormProps {
  onCitySubmit: (city: string) => void;
}
