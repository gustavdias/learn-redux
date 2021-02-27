import React from "react";
import FunctionContextComponentTwo from "./FunctionContextComponentTwo";
//! 2 - All from 1 was moved into ThemeContext.js
import { ThemeProvider } from "./ThemeContextTwo";

export default function App() {



  return (
    <>
      <ThemeProvider>
        <FunctionContextComponentTwo />
      </ThemeProvider>
    </>
  );
}
