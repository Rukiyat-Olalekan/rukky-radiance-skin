import React from "react";
import classes from "./Featured.module.css";

const feature = [
  {
    id: "f1",
    name: "sunscreen",
  },
  {
    id: "f2",
    name: "sunscreen",
  },
  {
    id: "f3",
    name: "sunscreen",
  },
  {
    id: "f4",
    name: "sunscreen",
  },
];

export function FeaturedProductsItems(props) {
  return (
    <li>
      <div className={classes.one}>{props.name}</div>
    </li>
  );
}

export function FeaturedProducts() {
  return (
    <ul className={classes["featured-products"]}>
      {feature.map((product) => {
        return <FeaturedProductsItems key={product.id} name={product.name} />;
      })}
    </ul>
  );
}

export default function Featured() {
  return (
    <section className={classes.featured}>
      <h1>Featured Categories</h1>
      <FeaturedProducts />
    </section>
  );
}
