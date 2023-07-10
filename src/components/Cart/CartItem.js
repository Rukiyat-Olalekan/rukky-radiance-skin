import React from "react";
import classes from "./CartItem.module.css";


const CartItem = (props) => {

  return (
    <li className={classes["cart-item"]}>
      <p>{props.name}</p>
      <div className={classes["cart-actions"]}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
      <p>
        {props.amount} x {props.price}
      </p>
    </li>
  );
};

export default CartItem;
