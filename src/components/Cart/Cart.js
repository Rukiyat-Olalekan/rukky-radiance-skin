import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../store/cartContext";

import classes from "./Cart.module.css";

function Cart() {
  const { productValue } = useContext(cartContext);
  const [cartItems, setCartItems] = useState(productValue);

  if (productValue.length === 0) {
    return (
      <div className={classes.zero}>
        <p>You have no items in your cart.</p>
        <p className={classes.some}><Link to="/">Want to add some?</Link></p>
      </div>
    );
  }

  const addMoreToCart = (product) => {
    const newCartItems = [...cartItems];
    const existingItemIndex = newCartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      newCartItems[existingItemIndex].quantity += 1;
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
      } else {
        newCartItems.splice(existingItemIndex, 1);
      }
      setCartItems((prevState) => [...newCartItems]);
    }
  };

  return (
    <ul className={classes.cart}>
      {productValue.map((product) => {
        return (
          <>
            <li className={classes.product} key={Math.random()}>
              <div className={classes.details}>
                <div className={classes.image}>
                  <img src={product.productImage} alt="a product" />
                </div>
                <div>
                  <p>{product.productName}</p>
                </div>
                <div className={classes.button}>
                  <button
                    onClick={() => {
                      addMoreToCart(product);
                    }}
                  >
                    Add More
                  </button>
                </div>
                <div className={classes.button}>
                  <button onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className={classes.pricing}>
                <div>
                  <p>Price</p>
                  <p>{product.productPrice}</p>
                </div>

                <div>
                  <p>Quantity</p>
                  <p>{product.quantity}</p>
                </div>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
}

export default Cart;
