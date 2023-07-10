import React from "react";
import Product from "./Product";
import classes from './ProductLists.module.css'

const ProductLists = (props) => {
    return (
      <div>
        <ul className={classes['product-lists']}>
        {props.items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
      </div>
    );
  };

export default ProductLists;