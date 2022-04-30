import React, { useContext, useState } from "react";
import { getCssVariables } from "../services/getCssVariables";

export const THEME_WALTER = "walter";
export const THEME_JECCEY = "jecce";
export const THEME_GUSTAVO = "gustavo";
export const THEME_OTHER = "home";

const themeContext = React.createContext();
const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null);

  //функция изменения темы
  const changeTheme = (name) => {
    setTheme(name);
    getCssVariables(name);
  };
  return (
    <themeContext.Provider
      value={{ theme: theme, changeTheme: changeTheme }}
      {...props}
    >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(themeContext);
