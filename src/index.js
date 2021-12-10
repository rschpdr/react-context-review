import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ThemeContextProvider } from "./contexts/themeContext";
import { LanguageContextProvider } from "./contexts/languageContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
