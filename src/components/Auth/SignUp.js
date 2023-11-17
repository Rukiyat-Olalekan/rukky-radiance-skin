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
        console.log(errorCode, errorMessage)
        console.log('hey')
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
    <div className={styles.form} onSubmit={handleSubmit}>
      <h1>Create new customer account</h1>
      <div>
        <h2>Personal Information</h2>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" ref={surnameRef} required />
        </div>
      </div>
      <div>
        <h2>Address/Contact Information</h2>
        <div className={styles.input}>
          <label htmlFor="phonenumber">Phone Number</label>
          <input id="phonenumber" type="number" ref={numberRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="streetaddress">Street Address</label>
          <input id="streetaddress" type="text" ref={streetAddRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="city">City/Town</label>
          <input id="city" type="text" ref={cityRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="state">State</label>
          <input id="state" type="search" ref={stateRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="country">Country</label>
          <input id="country" type="search" ref={countryRef} required />
        </div>
      </div>
      <div>
        <h2>Sign-in Information</h2>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={pwdRef} required />
        </div>
        <div className={styles.input}>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            id="confirmpassword"
            type="password"
            ref={confirmPwdRef}
            required
          />
        </div>
        <div className={styles.action}>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
