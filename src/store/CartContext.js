import { createContext, useReducer } from "react";

export const CartStateContext = createContext({
  cartList: [],
  cartLength: 0,
});
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        cartLength: state.cartLength + action.payload.count,
      };
    default:
      throw new Error("유효하지 않은 action type입니다.");
  }
};
const initialState = {
  cartList: [],
  cartLength: 0,
};

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
