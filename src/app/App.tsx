import React from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherCard from "../components/WeatherCard";
import LastViewedCities from "../components/LastViewedCities";
import useWeather from "../hooks/useWeather";
import { Container } from "@mui/material";
import "./App.scss";

const App: React.FC = () => {
  const { weather, error, isLoading, lastViewedCities, handleCitySubmit } =
    useWeather();

  return (
    <Container className="app-container">
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
    </Container>
  );
};

export default App;
