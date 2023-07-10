import React, { useReducer } from "react";
import CartContext from "./cart-context";

const productInitialState = { items: [], totalAmount: 0 };

const productReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      // updatedItems = state.items.map((item) => {
      //   return {
      //     ...item,
      //     amount: existingItem.amount + 1,
      //   };
      // });
      let updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else if (!existingItem) {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedAmount };
  }

  if (action.type === "REMOVE") {
   
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

   // why is action.price not a number?
    const updatedAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    else {
      updatedItems = state.items.map((item) => {
        return { ...item, amount: existingItem.amount - 1 };
      });
    } 
    return { items: updatedItems, totalAmount: updatedAmount };
  }
  return productInitialState;
};

const CartProvider = (props) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );

  const addItemToCartHandler = (item) => {
    productDispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    productDispatch({ type: "REMOVE", id: id });
  };

  const clearItemFromCartHandler = () => {
    return productInitialState;
  }

  const cartcontext = {
    items: productState.items,
    totalAmount: productState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItem: clearItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
