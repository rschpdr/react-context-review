import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext("en-US");

function LanguageContextProvider(props) {
  const [language, setLanguage] = useState("en-US");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContextProvider, LanguageContext };
