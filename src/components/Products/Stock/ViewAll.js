import React, { useContext } from "react";
import classes from "./Stock.module.css";
import StockForm from "./StockForm";
import CartContext from "../../../store/cart-context";

export const Stock = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    //need explanation on this
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(props.price);

  return (
    <li className={classes.stock}>
      <div className={classes.image}>
        <img src={props.productImage} alt="a Stock" />
      </div>
      <div className={classes.detail}>
        <div className={classes["stock-properties"]}>
          <p>{props.name}</p>
          <p className={classes["stock-description"]}>{props.description}</p>
          <p>{formattedPrice}</p>
        </div>
        <div className={classes["stock-form"]}>
          <StockForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};


export default function ViewAll() {
  return (
    <div className={classes["stock-list"]}>
      <h1>Back in Stock</h1>
      <ul className={classes["stock-lists"]}>
        {props.items.map((item) => (
          <Stock
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            productImage={item.productImageUrl}
          />
        ))}
      </ul>
      <div>
        <button>View all</button>
      </div>
    </div>
  );
}
