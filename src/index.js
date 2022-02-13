import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { MealContextProvider } from "./store/MealContext";
import { CartProvider } from "./store/CartContext";

ReactDOM.render(
  <CartProvider>
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </CartProvider>,
  document.getElementById("root")
);
