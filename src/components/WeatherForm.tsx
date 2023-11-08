import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { WeatherFormProps } from "../types/types";

const WeatherForm: React.FC<WeatherFormProps> = ({ onCitySubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city) {
      onCitySubmit(city);
      setCity(""); // Clear the input after submission
    }
  };

  return (
    <div>
      <TextField
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
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default WeatherForm;
