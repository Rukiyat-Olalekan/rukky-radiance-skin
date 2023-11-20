import { Link } from "react-router-dom";

import classes from "./Featured.module.css";

const Featured = () => {
  return (
    <div className={classes.featured}>
      <h1>Featured Categories</h1>
      <ul className={classes["featured-lists"]}>
        <li>
          <Link to="shop/sunscreen">Sunscreen</Link>
        </li>
        <li>
          <Link to="shop/cleansers">Face Wash</Link>
        </li>
        <li>
          <Link to="shop/serums">Serum</Link>
        </li>
        <li>
          <Link to="shop/asian">Asian Skincare</Link>
        </li>
      </ul>
    </div>
  );
};

export default Featured;
