import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { LastViewedCitiesProps } from "../types/types";
import "./LastViewedCities.scss";

const capitalizeCityName = (city: string) => {
  return city.replace(/\b(\w)/g, (s) => s.toUpperCase());
};

const LastViewedCities: React.FC<LastViewedCitiesProps> = ({
  onSelectCity,
  lastViewedCities,
}) => {
  const [lastViewed, setLastViewed] = useState<string[]>([]);

  useEffect(() => {
    // Update the local state whenever the lastViewedCities prop changes
    setLastViewed(lastViewedCities.map(capitalizeCityName));
  }, [lastViewedCities]);

  return (
    <List className="last-viewed-cities">
      {lastViewed.map((city, index) => (
        <ListItem button key={index} onClick={() => onSelectCity(city)}>
          <ListItemText primary={city} />
        </ListItem>
      ))}
    </List>
  );
};

export default LastViewedCities;
