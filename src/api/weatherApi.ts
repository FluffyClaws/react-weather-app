import { WeatherResponse } from "../types/types";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (city: string): Promise<WeatherResponse> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Weather data could not be fetched.");
  }

  return response.json();
};
