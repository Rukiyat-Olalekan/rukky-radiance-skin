import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import cartContext from "../../store/cartContext";

import classes from "./Cart.module.css";

function Cart() {
  const { productValue } = useContext(cartContext);
  const [cartItems, setCartItems] = useState(productValue);

  const addMoreToCart = (product) => {
    const newCartItems = [...cartItems];
    const existingItemIndex = newCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const newQuantity = newCartItems[existingItemIndex].quantity + 1;
      newCartItems[existingItemIndex].quantity = newQuantity;

      const newSubtotal =
        newQuantity * newCartItems[existingItemIndex].productPrice;

      const formattedSubtotal = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(newSubtotal);

      newCartItems[existingItemIndex].subTotal = formattedSubtotal;

      setCartItems((prevItems) => [...prevItems]);
    }
  };

  const removeFromCart = (product) => {
    const newCartItems = [...cartItems];
    const existingItemIndex = newCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      if (newCartItems[existingItemIndex].quantity > 0) {
        newCartItems[existingItemIndex].quantity -= 1;

        const newSubtotal =
          newCartItems[existingItemIndex].quantity *
          newCartItems[existingItemIndex].productPrice;

        const formattedSubtotal = new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(newSubtotal);

        newCartItems[existingItemIndex].subTotal = formattedSubtotal;
      } else {
        newCartItems.splice(existingItemIndex, 1);
      }

      setCartItems([...newCartItems]);
    }
  };

  let content;

  if (productValue.length === 0) {
    content = (
      <div className={classes["empty-cart"]}>
        <p>Your shopping cart is empty.</p>
        <p>
          Click{" "}
          <Link to="/" className={classes["empty-cart-link"]}>
            {" "}
            here{" "}
          </Link>
          to continue shopping.
        </p>
      </div>
    );
  } else {
    content = (
      <>
        <ul className={classes.cart}>
          {productValue.map((product) => {
            const formattedPrice = new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(product.productPrice);

            return (
              <li className={classes.product} key={product.productName}>
                <div className={classes.image}>
                  <img src={product.productImage} alt="a product" />
                  <p>{product.productName}</p>
                </div>
                <div className={classes.details}>
                  <div className={classes.button}>
                    <button
                      onClick={() => {
                        addMoreToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p>{product.quantity}</p>
                  </div>
                  <div className={classes.button}>
                    <button onClick={() => removeFromCart(product)}>-</button>
                  </div>
                  <p>{formattedPrice}</p>
                </div>
                <div className={classes.subtotal}>{product.subTotal}</div>
              </li>
            );
          })}
        </ul>
        <div className={classes.form}>
          <button>
            <Link
              to={{
                pathname: "/create",
                state: { cartItems: cartItems },
              }}
            >
              Checkout
            </Link>
          </button>
        </div>
      </>
    );
  }

  return <section>{content}</section>;
}

export default Cart;
