import React from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <form className={styles.form}>
      <h1>Create new customer account</h1>
      <div>
        <h2>Personal Information</h2>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" />
        </div>
      </div>
      <div>
        <h2>Address/Contact Information</h2>
        <div className={styles.input}>
          <label htmlFor="phonenumber">Phone Number</label>
          <input id="phonenumber" type="number" />
        </div>
        <div className={styles.input}>
          <label htmlFor="streetaddress">Street Address</label>
          <input id="streetaddress" type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="city">City/Town</label>
          <input id="city" type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="state">State</label>
          <input id="state" type="search" />
        </div>
        <div className={styles.input}>
          <label htmlFor="country">Country</label>
          <input id="country" type="search" />
        </div>
      </div>
      <div>
        <h2>Sign-in Information</h2>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div className={styles.input}>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input id="confirmpassword" type="password" />
        </div>
        <div className={styles.action}>
          <button>Sign Up</button>
        </div>
      </div>
    </form>
  );
}
