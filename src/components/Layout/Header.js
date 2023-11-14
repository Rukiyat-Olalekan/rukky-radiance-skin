import React from "react";
import classes from "./Header.module.css";
import CategoryLists from "../Categories/CategoryLists";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <CategoryLists />
      </div>
      <h3>Rukky Radiance Skin</h3>
      <div className={classes.auth}>
        <div className={classes["header-input"]}>
          <input type="text" placeholder="search for products..." />
        </div>
        <div className={classes["button-container"]}>
          {" "}
          <div className={classes.button}>
            <button>Sign In</button>
          </div>
          <div className={classes.button}>
            <button>Sign Up</button>
          </div>
        </div>
        <HeaderCartButton onClick={props.onClick} />
      </div>
    </header>
  );
};

export default Header;
