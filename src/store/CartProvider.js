import { useReducer } from "react";
import {
  CartDispatchContext,
  CartStateContext,
  initialState,
  reducer,
} from "./CartContext";

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
