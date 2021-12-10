import { useContext } from "react";

import { ThemeContext } from "../contexts/themeContext";

function Button(props) {
  const { theme, themeColors } = useContext(ThemeContext);

  return (
    <button className={`btn btn-${themeColors.btnBg[theme]}`}>
      {props.children}
    </button>
  );
}

export default Button;
