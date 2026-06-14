import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../App";
import "toastify-js/src/toastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
