import "./styles/theme.css";
import React from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { THEMES } from "./constants";
import { createWebTheme } from "./theme";

function App() {
  const theme = createWebTheme({
    direction: "ltr",
    responsiveFontSizes: true,
    theme: THEMES.LIGHT,
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
