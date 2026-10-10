import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);