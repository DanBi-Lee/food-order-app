import { useReducer } from "react";
import { CartDispatchContext, CartStateContext } from "./CartContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          count: existingCartItem.count + action.item.count,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.count,
      };
    case "REMOVE_CART":
      const existingCartItemIndexforRemove = state.items.findIndex(
        (item) => item.id === action.id
      );
      const exisingItemforRemove = state.items[existingCartItemIndexforRemove];
      const updatedTotalAmount = state.totalAmount - 1;
      let updatedItemsforRemove;
      if (exisingItemforRemove.count === 1) {
        updatedItemsforRemove = state.items.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedItemforRemove = {
          ...exisingItemforRemove,
          count: exisingItemforRemove.count - 1,
        };
        updatedItemsforRemove = [...state.items];
        updatedItemsforRemove[existingCartItemIndexforRemove] =
          updatedItemforRemove;
      }
      return {
        items: updatedItemsforRemove,
        totalAmount: updatedTotalAmount,
      };
    case "INCREASE_COUNT":
      return {
        ...state,
        items: state.items.map((item) =>
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
        items: state.items.map((item) =>
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

const initialState = {
  items: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addItemToCartHandler = (item) => {
    dispatch({
      type: "ADD_CART",
      item: item,
    });
  };
  const removeItemToCartHandler = (id) => {
    dispatch({
      type: "REMOVE_CART",
      id: id,
    });
  };
  const dispatchContext = {
    addItemToCartHandler,
    removeItemToCartHandler,
  };

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatchContext}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
