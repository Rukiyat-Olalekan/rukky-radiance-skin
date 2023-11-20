import { useState, useRef } from "react";
import styles from "./SignUp.module.css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const auth = getAuth();

  const [inputData, setInputData] = useState(null);
  const [pwdValid, setPwdValid] = useState(false);

  const nameRef = useRef();
  const surnameRef = useRef();
  const numberRef = useRef();
  const streetAddRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const nameRefValue = nameRef.current.value;
    const surnameRefValue = surnameRef.current.value;
    const numberRefValue = numberRef.current.value;
    const streetAddRefValue = streetAddRef.current.value;
    const cityRefValue = cityRef.current.value;
    const stateRefValue = stateRef.current.value;
    const countryRefValue = countryRef.current.value;
    const emailRefValue = emailRef.current.value;
    const pwdRefValue = pwdRef.current.value;
    const confirmPwdRefValue = confirmPwdRef.current.value;

    if (pwdRefValue === confirmPwdRefValue) {
      setPwdValid(true);
    }

    const data = {
      email: emailRefValue,
      password: pwdRefValue,
    };

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    console.log({
      nameRefValue,
      surnameRefValue,
      numberRefValue,
      streetAddRefValue,
      cityRefValue,
      stateRefValue,
      countryRefValue,
    });

    pwdValid && setInputData(data);
  }

  return (
    <div className={styles.form}>
      <h3>Create new customer account</h3>
      <form onSubmit={handleSubmit}>
        {" "}
        <p className={styles.description}>Personal Information</p>
        <div className={styles.input}>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input id="name" type="text" ref={nameRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="surname">
            Surname <span>*</span>
          </label>
          <input id="surname" type="text" ref={surnameRef} required />
        </div>
        <p className={styles.description}>Address/Contact Information</p>
        <div className={styles.input}>
          <label htmlFor="phonenumber">
            Phone Number <span>*</span>
          </label>
          <input id="phonenumber" type="number" ref={numberRef} required />
          <p className={styles.warning}>
            To avoid delivery issues and extra delivery charges, kindly ensure
            that the phone number is correct.
          </p>
        </div>
        <div className={styles.input}>
          <label htmlFor="streetaddress">
            Street Address <span>*</span>
          </label>
          <input id="streetaddress" type="text" ref={streetAddRef} required />
          <p className={styles.warning}>
            For doorstep delivery, kindly provide a very detailed address. Your
            address should include your house number, street/road name, estate
            name (if any) and the closest busstop or landmark.
          </p>
        </div>
        <div className={styles.input}>
          <label htmlFor="city">
            City/Town <span>*</span>
          </label>
          <input id="city" type="text" ref={cityRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="state">
            State <span>*</span>
          </label>
          <input id="state" type="select" ref={stateRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="country">
            Country <span>*</span>
          </label>
          <input id="country" type="select" ref={countryRef} required />
        </div>
        <p className={styles.description}>Sign-in Information</p>
        <div className={styles.input}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input id="email" type="email" ref={emailRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input id="password" type="password" ref={pwdRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="confirmpassword">
            Confirm Password <span>*</span>
          </label>
          <input
            id="confirmpassword"
            type="password"
            ref={confirmPwdRef}
            required
          />
        </div>{" "}
        <div className={styles.action}>
          <button>Sign Up</button>
        </div>{" "}
      </form>
    </div>
  );
}
