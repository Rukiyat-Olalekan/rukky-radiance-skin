import React from "react";
import Stock from "./Stock";
import classes from "./StockLists.module.css";

const StockLists = (props) => {
  return (
    <div className={classes["stock-list"]}>
      <h1>Back in Stock</h1>
      <ul className={classes["stock-lists"]}>
        {props.items.map((item) => (
          <Stock
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            productImage={item.productImageUrl}
          />
        ))}
      </ul>
      <div className={classes.button}>
        <button>View all</button>
      </div>
    </div>
  );
};

export default StockLists;
