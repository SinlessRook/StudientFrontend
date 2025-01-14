import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "./index.css";
import { GlobalProvider } from './Context/GlobalContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
    <AppRouter />
    </GlobalProvider>
  </React.StrictMode>
);
