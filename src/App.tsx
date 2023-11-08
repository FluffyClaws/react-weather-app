import React, { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api/weatherApi";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCitySubmit = async (city: string) => {
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather({
        temp: data.main.temp,
        name: data.name,
        description: data.weather[0].description,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <WeatherForm onCitySubmit={handleCitySubmit} />
      {weather && <WeatherCard weather={weather} />}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
