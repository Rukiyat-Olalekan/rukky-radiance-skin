import { useRef, useContext } from "react";
import cartContext from "../../../store/cartContext";

import classes from "./Product.module.css";

const Product = (props) => {
  const { addItemToCart } = useContext(cartContext);

  const quantityInputRef = useRef();

  const productPrice = props.price;
  const productName = props.name;
  const productImage = props.productImage;
  const id = props.id;

  const addToCartHandler = (e) => {
    e.preventDefault();
    const quantity = +quantityInputRef.current.value;

    const subTotal = productPrice;

    const productDetails = {
      productPrice,
      productName,
      productImage,
      quantity,
      id,
      subTotal
    };

    addItemToCart(productDetails);
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
      </div>
      <form onSubmit={addToCartHandler}>
        <div className={classes.input}>
          <label htmlFor={`quantity_${props.id}`}>Qty:</label>
          <input
            ref={quantityInputRef}
            id={`quantity_${props.id}`}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
          />
        </div>
        <div className={classes.action}>
          <button type="submit">ADD TO CART</button>
        </div>
      </form>
    </li>
  );
};

export default Product;
