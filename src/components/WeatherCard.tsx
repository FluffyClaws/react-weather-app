import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { WeatherCardProps } from "../types/types";
import "./WeatherCard.scss";

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, isLoading }) => {
  if (isLoading) {
    return (
      <Card className="weather-card">
        <CardContent>
          <Typography variant="h5" component="div">
            Loading...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  if (weather) {
    return (
      <Card className="weather-card">
        <CardContent>
          <Typography
            className="weather-card__title"
            variant="h5"
            component="div"
          >
            {weather.name}, {weather.country}
          </Typography>
          <Box
            className="weather-card__details"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my={2}
          >
            <Typography
              className="weather-card__temperature"
              variant="subtitle1"
              component="div"
            >
              Temperature: {weather.temp}°C
            </Typography>
            <img
              className="weather-card__icon"
              src={`/icons/${weather.icon}.png`}
              alt="Weather icon"
            />
          </Box>
          <Typography
            className="weather-card__description"
            variant="subtitle1"
            color="text.secondary"
          >
            Description: {weather.description}
          </Typography>
          <Typography
            className="weather-card__pressure"
            variant="subtitle1"
            color="text.secondary"
          >
            Pressure: {weather.pressure} hPa
          </Typography>
          <Typography
            className="weather-card__humidity"
            variant="subtitle1"
            color="text.secondary"
          >
            Humidity: {weather.humidity}%
          </Typography>
          <Typography
            className="weather-card__wind-speed"
            variant="subtitle1"
            color="text.secondary"
          >
            Wind Speed: {weather.windSpeed} km/h
          </Typography>
          <Typography
            className="weather-card__wind-direction"
            variant="subtitle1"
            color="text.secondary"
          >
            Wind Direction: {weather.windDeg}°
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default WeatherCard;
