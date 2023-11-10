import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { WeatherFormProps } from "../types/types";
import "./WeatherForm.scss";

const WeatherForm: React.FC<WeatherFormProps> = ({ onCitySubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city) {
      onCitySubmit(city);
      setCity(""); // Clear the input after submission
    }
  };

  return (
    <Box className="weather-form">
      <TextField
        className="weather-form__input"
        label="Enter the city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <Button
        className="weather-form__submit"
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default WeatherForm;
