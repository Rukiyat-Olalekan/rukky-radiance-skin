import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.css";

import { app } from "../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [error, setError] = useState(null);

  const auth = getAuth(app);

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(
          `${errorCode} : "Authentication failed. Please check your credentials."`
        );
      });
  }

  return (
    <div className={styles.form}>
      {error && <p className={styles.error}>{error}</p>}
      <h3>Customer login</h3>
      <form onSubmit={handleSubmit}>
        <p className={styles.description}>Please login to continue</p>
        <div className={styles.input}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div className={styles["password-change"]}>
          <button>Forgot your password?</button>
        </div>
        <div className={styles.login}>
          <button>Login</button>
        </div>
        <p className={styles.account}>Don't have an account?</p>
        <div className={styles.signup}>
          <button>
            <Link to="/create">Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
