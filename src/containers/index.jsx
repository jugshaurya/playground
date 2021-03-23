import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Drawer from "./Drawer";

const primaryColor = "#2089dc";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
});

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Drawer />
      </Router>
    </ThemeProvider>
  );
}
