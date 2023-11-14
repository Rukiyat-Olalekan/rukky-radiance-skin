import React from "react";
import styles from "./SignIn.module.css"

export default function SignIn() {
  return (
    <div>
      <h1>Customer login</h1>
      <form className={styles.form}>
        <p>Please login to continue</p>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <button>Forgot your password?</button>
        </div>
        <div className={styles.action}>
          <button>Login</button>
        </div>
        <p>Don't have an account?</p>
        <div className={styles.action}>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
