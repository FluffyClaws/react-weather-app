import { useState, useEffect } from "react";
import { ThemeProperties } from "../types/types";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    const body = document.body;
    const themeProperties: ThemeProperties =
      theme === "dark"
        ? {
            "--text-color": "#ffffff",
            "--card-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
          }
        : {
            "--text-color": "#333",
            "--card-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          };

    Object.keys(themeProperties).forEach((key) => {
      const property = key as keyof ThemeProperties;
      body.style.setProperty(property, themeProperties[property]);
    });

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};

export default useTheme;
