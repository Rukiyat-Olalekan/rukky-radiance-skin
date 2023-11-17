import { useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const auth = getAuth();

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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });


  }

  return (
    <div>
      <h1>Customer login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Please login to continue</p>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <div>
          <button>Forgot your password?</button>
        </div>
        <div className={styles.action}>
          <button>Login</button>
        </div>
        <p>Don't have an account?</p>
        <div className={styles.action}>
          <button>
            <Link to="/create">Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
