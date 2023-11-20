import { useState } from "react";
import cartContext from "./cartContext";

function CartProvider({ children }) {
  const [productValue, setProductValue] = useState([]);

  function addItemToCart(productDetails) {
    setProductValue((prevState) => [...prevState, productDetails]);
  }

  const value = { productValue, addItemToCart };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

export default CartProvider;
