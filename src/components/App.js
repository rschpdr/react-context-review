import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import CardList from "./CardList";
import { ThemeContext } from "../contexts/themeContext";
import { LanguageContext } from "../contexts/languageContext";

function App() {
  const { theme, themeColors, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={themeColors.background[theme]}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`btn btn-${themeColors.btnBg[theme]} me-3`}
      >
        Tema: {theme}
      </button>

      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="form-select"
        value={language}
      >
        <option value="pt-BR">Português (Brasil)</option>
        <option value="en-US">English (US)</option>
      </select>

      <div className="pt-5">
        <CardList />
      </div>
    </div>
  );
}

export default App;
