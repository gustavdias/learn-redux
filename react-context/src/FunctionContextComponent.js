import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function FunctionContextComponent() {
  //get the value from the context
  const darkTheme = useContext(ThemeContext);

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

      <div style={themeStyles}> Function Theme</div>
    </>
  );
}
