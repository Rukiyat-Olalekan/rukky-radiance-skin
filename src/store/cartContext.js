import { createContext } from "react";

const cartContext = createContext({
  productPrice: "",
  productName: "",
  productImage: "",
  quantity: 1,
  formattedSubtotal: "",
});


export default cartContext;