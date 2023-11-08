import React from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import LastViewedCities from "./components/LastViewedCities";
import useWeather from "./hooks/useWeather";

const App: React.FC = () => {
  const { weather, error, isLoading, lastViewedCities, handleCitySubmit } =
    useWeather();

  return (
    <div>
      <WeatherForm onCitySubmit={handleCitySubmit} />
      <LastViewedCities
        onSelectCity={handleCitySubmit}
        lastViewedCities={lastViewedCities}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : weather ? (
        <WeatherCard weather={weather} />
      ) : null}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
