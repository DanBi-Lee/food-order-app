import { createContext, useReducer } from "react";

export const CartStateContext = createContext({
  cartList: [],
  totalAmount: 0,
});
export const CartDispatchContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        totalAmount: state.totalAmount + action.payload.count,
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        ),
        totalAmount: state.totalAmount + 1,
      };
    case "DECREASE_COUNT":
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                count: item.count - 1,
              }
            : item
        ),
        totalAmount: state.totalAmount - 1,
      };
    default:
      throw new Error("유효하지 않은 action type입니다.");
  }
};

export const initialState = {
  cartList: [],
  totalAmount: 0,
};
