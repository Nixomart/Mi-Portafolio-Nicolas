import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkMode.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
    <Router>
      <App />
    </Router>
    </DarkModeProvider>
  </React.StrictMode>
);
