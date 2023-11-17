import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>Shop by category</div>
      <h3>Rukky Radiance Skin</h3>
      <div className={classes["user-info"]}>
        <div className={classes["header-input"]}>
          <input type="text" placeholder="search for products..." />
        </div>
        <div className={classes.auth}>
          <button>
            <Link to="/login">Sign In</Link>
          </button>
        </div>
        <div className={classes.cart}>
          <HeaderCartButton onClick={props.onClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
