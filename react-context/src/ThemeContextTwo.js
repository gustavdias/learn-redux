import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

//It wraps useContext(ThemeContext) inside of its own hook called useTheme = never need to worry about accessing this theme context outside of this one single file
export function useTheme() {
  return useContext(ThemeContext);
}

//some thing for ThemeUpdateContext
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
