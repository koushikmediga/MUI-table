import "react-app-polyfill/stable";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "chart.js/auto";

import reportWebVitals from "./utils/reportWebVitals";
import App from "./App";

// Note: Remove the following line if you want to disable the API mocks.
import "./mocks";
import { loadSecrets } from "./Secrets";

import { ThemeProvider } from "./contexts/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container!);

(async () => {
  root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
