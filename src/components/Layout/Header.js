import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import React from "react";

const Header = () => {
  return (
    <header className={classes.header}>
      <h3>
        <Link to="/">Rukky Radiance Skin</Link>
      </h3>
      <div className={classes["header-input"]}>
      <IoSearch size="40px" />
        <input
          type="search"
          id="search-bar"
          placeholder="search for products..."
        />
      </div>
      <div className={classes["user-info"]}>
        <div className={classes.auth}>
          <Link to="/login">
            {" "}
            <CgProfile size="40px" />
          </Link>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <HeaderCartButton />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
