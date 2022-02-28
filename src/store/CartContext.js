import { createContext } from "react";

export const CartStateContext = createContext({
  cartList: [],
  totalAmount: 0,
});
export const CartDispatchContext = createContext({
  addItemToCartHandler: (item) => {},
  removeItemToCartHandler: (id) => {},
});
