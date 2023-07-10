import React from "react";


const CartContext = React.createContext({
  items: [],
  id: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
