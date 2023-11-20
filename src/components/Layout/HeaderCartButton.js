import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cartContext";
import { IoMdCart } from "react-icons/io";

const HeaderCartButton = () => {
  const { productValue } = useContext(cartContext);

  const cartItems = productValue.reduce((total, item) => total + item.quantity, 0);
  return <button className={classes.button}><IoMdCart size="40px" />{cartItems}</button>;
};

export default HeaderCartButton;
