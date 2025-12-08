import "@/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { globalStyles } from "./styles/global";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
