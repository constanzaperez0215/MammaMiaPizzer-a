import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import PizzaPovider from "./context/PizzaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaPovider>
        <App />
      </PizzaPovider>
    </BrowserRouter>
  </React.StrictMode>
);
