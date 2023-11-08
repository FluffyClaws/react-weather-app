import { useState, useEffect } from "react";
import { WeatherData } from "../types/types";
import { fetchWeather } from "../api/weatherApi";

const LOCAL_STORAGE_KEY = "lastViewedCities";
const MAX_CITIES = 3;

const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastViewedCities, setLastViewedCities] = useState<string[]>([]);

  useEffect(() => {
    // Load last viewed cities from local storage when the hook is first used
    const storedCities = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedCities) {
      setLastViewedCities(JSON.parse(storedCities));
    }
  }, []);

  const saveCityToLocalStorage = (city: string) => {
    // Filter out the city if it already exists
    const filteredCities = lastViewedCities.filter(
      (c) => c.toLowerCase() !== city.toLowerCase()
    );
    // Add the new city to the front of the list
    const updatedCities = [city, ...filteredCities].slice(0, MAX_CITIES);
    setLastViewedCities(updatedCities);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCities));
  };

  const handleCitySubmit = async (city: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetchWeather(city);
      const data: WeatherData = {
        temp: response.main.temp,
        name: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        windDeg: response.wind.deg,
        windSpeed: response.wind.speed,
        pressure: response.main.pressure,
        humidity: response.main.humidity,
        icon: response.weather[0].icon,
      };
      setWeather(data);
      saveCityToLocalStorage(city);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.error(err);
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { weather, error, isLoading, lastViewedCities, handleCitySubmit };
};

export default useWeather;
