import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(props.price);

  return (
    <li className={classes["cart-item"]}>
      <p>{props.name}</p>
      <div className={classes["cart-actions"]}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      <p>
        {props.amount} x {formattedPrice}
      </p>
    </li>
  );
};

export default CartItem;
