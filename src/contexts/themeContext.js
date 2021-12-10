import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext("light");

function ThemeContextProvider(props) {
  const themeColors = {
    background: {
      light: "light-bg",
      dark: "dark-bg",
    },
    cardBg: {
      light: "card-bg-light",
      dark: "card-bg-dark",
    },
    btnBg: {
      light: "primary",
      dark: "info",
    },
  };

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeColors }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
