import { useContext } from "react";
import Button from "./Button";

import { ThemeContext } from "../contexts/themeContext";
import { LanguageContext } from "../contexts/languageContext";

function Card(props) {
  const { theme, themeColors } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div
      className={`card ${themeColors.cardBg[theme]}`}
      style={{ width: "18rem" }}
    >
      <div style={{ height: "100px", width: "auto" }}>
        <img
          src={props.picture}
          className="card-img-top"
          alt={props.name}
          style={{ maxHeight: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Button>
          {language === "en-US" ? "Go Somewhere" : "Ir à algum lugar"}
        </Button>
      </div>
    </div>
  );
}

export default Card;
