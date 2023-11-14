import React from "react";
import Button from "../UI/Button";
import classes from "./AvailableNow.module.css";

const AvailableNow = () => {
  return (
    <div className={classes.available}>
      <div className={classes.sales}>
        <h1>Beauty sale!!!</h1>
        <h1>GET UP TO 10% DISCOUNT ON ALL PRODUCTS</h1>
        <Button type="submit">SHOP NOW</Button>
      </div>
    </div>
  );
};

export default AvailableNow;
