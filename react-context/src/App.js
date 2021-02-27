import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

//! 1
export const ThemeContext = React.createContext();

export default function App() {
  //! 1
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme1() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  //! 1

  return (
    //everything inside the context provider have access to the value prop of the ThemeContext.Provider
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme1}> Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}
