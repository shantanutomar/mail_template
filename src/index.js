import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import green from '@material-ui/core/colors/green';
// import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50"
    },
    secondary: {
      main: "#ff9800"
    },
    action: {
      main: "#6f6f6f"
    }
  },
  typography: {
    useNextVariants: true
  }
});

const app = (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
