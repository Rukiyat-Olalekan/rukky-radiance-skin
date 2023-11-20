import { createContext } from "react";

const cartContext = createContext({
  price: "",
  productName: "",
  image: "",
  amount: 1,
  subTotal: "",
});


export default cartContext;