import React from "react";
import { Card, Typography } from "@mui/material";
import { WeatherCardProps } from "../types/types";

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <Card>
      <Typography variant="h5">{weather.name}</Typography>
      <Typography>Temperature: {weather.temp}°C</Typography>
    </Card>
  );
};

export default WeatherCard;
