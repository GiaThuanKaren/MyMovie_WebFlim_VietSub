import { createTheme, Paper, ThemeProvider } from "@mui/material";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { deepmerge } from "@mui/utils";

function MainLayOut({ children }) {
  const { IsLightTheme } = useSelector((state) => state);
  const theme = createTheme(
    deepmerge({
      palette: {
        mode: IsLightTheme ? "light" : "dark",
      },
    })
  );
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default MainLayOut;
