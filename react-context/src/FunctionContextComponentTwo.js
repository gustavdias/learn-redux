import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContextTwo";

export default function FunctionContextComponent() {
  //get the value from the context
  // const darkTheme = useContext(ThemeContext);
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    //in order to use a context inside of a function component you can wrap it inside of <ThemeContext.Consumer>
    //? Use useContext
    <>
      <button onClick={toggleTheme}> Toggle Theme Two</button>

      <div style={themeStyles}> Function Theme Two</div>
    </>
  );
}
