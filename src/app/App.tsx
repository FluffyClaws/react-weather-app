import React from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherCard from "../components/WeatherCard";
import LastViewedCities from "../components/LastViewedCities";
import useWeather from "../hooks/useWeather";
import { Container, Switch } from "@mui/material";
import "./App.scss";
import useTheme from "../hooks/useTheme";

const App: React.FC = () => {
  const { weather, error, isLoading, lastViewedCities, handleCitySubmit } =
    useWeather();
  const { theme, toggleTheme } = useTheme();

  return (
    <Container className="app-container" data-theme={theme}>
      <Switch
        checked={theme === "dark"}
        onChange={toggleTheme}
        name="themeToggle"
        inputProps={{ "aria-label": "theme toggle" }}
      />
      <WeatherForm onCitySubmit={handleCitySubmit} />
      <LastViewedCities
        onSelectCity={handleCitySubmit}
        lastViewedCities={lastViewedCities}
      />
      <WeatherCard weather={weather} isLoading={isLoading} />
      {error && <div>Error: {error}</div>}
    </Container>
  );
};

export default App;
