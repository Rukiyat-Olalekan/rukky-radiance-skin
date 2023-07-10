import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <input type="text" placeholder="search for products..." />
      <h3>Rukky Radiance Skin</h3>
      <HeaderCartButton onClick={props.onClick} />
    </header>
  );
};

export default Header;
