import React from "react";

import React, { useContext } from "react";
import classes from "./Product.module.css";
import ProductForm from "../../Products/Product/ProductForm";
import CartContext from "../../../store/cart-context";

export const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
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
    <li className={classes.product}>
      <div className={classes.image}>
        <img src={props.productImage} alt="a product" />
      </div>
      <div className={classes.detail}>
        <div className={classes["product-properties"]}>
          <p>{props.name}</p>
          <p className={classes["product-description"]}>{props.description}</p>
          <p>{formattedPrice}</p>
        </div>
        <div className={classes["product-form"]}>
          <ProductForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};


export default function FacialCleansers() {
  return (
    <div className={classes["product-list"]}>
      <ul className={classes["product-lists"]}>
        {props.items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            productImage={item.productImageUrl}
          />
        ))}
      </ul>
    </div>
  );
}
