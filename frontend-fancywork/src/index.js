// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Tus estilos propios
import "./styles/Sidebar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
