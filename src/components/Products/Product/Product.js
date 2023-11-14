import React, { useContext } from "react";
import classes from "./Product.module.css";
import ProductForm from "./ProductForm";
import CartContext from "../../../store/cart-context";

const Product = (props) => {
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

export default Product;
