import React, { useRef, useState } from "react";
import classes from "./CartForm.module.css";

const CartForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    state: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const stateInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredNameInput = nameInputRef.current.value;
    const enteredStreetInput = streetInputRef.current.value;
    const enteredPostalCodeInput = postalCodeInputRef.current.value;
    const enteredStateInput = stateInputRef.current.value;

    const nameIsValid = enteredNameInput.trim() !== "";
    const streetIsValid = enteredStreetInput.trim() !== "";
    const postalCodeIsValid = enteredPostalCodeInput.length === 5;
    const stateIsValid = enteredStateInput.trim() !== "";

    setFormInputsValidity({
      name: nameIsValid, //read/practise this logic
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      state: stateIsValid,
    });

    let formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && stateIsValid;

    if (!formIsValid) {
      return;
    }

    props.onCheckout({
      name: enteredNameInput,
      street: enteredStreetInput,
      postalCode: enteredPostalCodeInput,
      state: enteredStateInput,
    });
  };

  const nameInputClasses = `${classes["cart-form__control"]} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetInputClasses = `${classes["cart-form__control"]} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeInputClasses = `${classes["cart-form__control"]} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const stateInputClasses = `${classes["cart-form__control"]} ${
    formInputsValidity.state ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street:</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="number" id="postalCode" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postalCode (up to 5 numbers).</p>
        )}
      </div>
      <div className={stateInputClasses}>
        <label htmlFor="state">State:</label>
        <input type="text" id="state" ref={stateInputRef} />
        {!formInputsValidity.state && <p>Please enter a valid state.</p>}
      </div>

      <div className={classes["cart-form__actions"]}>
        <button type="submit">CHECKOUT</button>
        <button onClick={props.onClose}>CLOSE</button>
      </div>
    </form>
  );
};

export default CartForm;
