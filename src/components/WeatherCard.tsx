import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { WeatherCardProps } from "../types/types";

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {weather.name}, {weather.country}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my={2}
        >
          <Typography variant="subtitle1" component="div">
            Temperature: {weather.temp}°C
          </Typography>
          <img
            src={`/icons/${weather.icon}.png`}
            alt="Weather icon"
            style={{ width: "50px" }}
          />
        </Box>
        <Typography variant="subtitle1" color="text.secondary">
          Description: {weather.description}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Pressure: {weather.pressure} hPa
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Humidity: {weather.humidity}%
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Wind Speed: {weather.windSpeed} km/h
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Wind Direction: {weather.windDeg}°
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
