import React from "react";
import { createRoot } from "react-dom/client";
import ScreenPage from "./pages/ScreenPage.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScreenPage />
  </React.StrictMode>
);
