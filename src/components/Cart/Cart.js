import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Overlays from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CartForm from "./CartForm";

const CartLists = () => {
  const cartCtx = useContext(CartContext);

  const removeCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  return (
    <ul className={classes["cart-lists"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addCartHandler.bind(null, item)}
          onRemove={removeCartHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

const Cart = (props) => {
  const [showCartForm, setShowCartForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [error, setError] = useState(null);

  const showCartFormHandler = () => {
    setShowCartForm(true);
  };
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const formattedTotalAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalAmount);

  //Make sure this posts the order to backend

  const CartFormCheckoutHandler = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://task-http-8acea-default-rtdb.firebaseio.com/order.json",
        {
          method: "POST",
          body: JSON.stringify({ user: value, orderedItems: cartCtx.items }),
        }
      );
      if (!response.ok) {
        throw new Error("Order was not sent!");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearItem();
  };

  const cartModalContent = (
    <React.Fragment>
      <div className={classes.cart}> MY CART </div>
      <CartLists />
      <div className={classes["cart-total__subtotal"]}>
        <h3>SUBTOTAL:</h3>
        <span>{formattedTotalAmount}</span>
      </div>
    </React.Fragment>
  );

  let content = (
    <div className={classes["cart-total__actions"]}>
      <button onClick={props.onCloseCart}>CLOSE</button>
      <button onClick={showCartFormHandler}>PLACE ORDER</button>
    </div>
  );

  if (showCartForm) {
    content = (
      <CartForm
        onClose={props.onCloseCart}
        onCheckout={CartFormCheckoutHandler}
      />
    );
  }

  return (
    <Overlays onClick={props.onCloseCart}>
      {cartModalContent}
      {content}
      {isSubmitting && <p>Sending order data...</p>}
      {didSubmit && <p>Successfully sent order.</p>}
      {error && <p>Failed to send order.</p>}
    </Overlays>
  );
};

export default Cart;
