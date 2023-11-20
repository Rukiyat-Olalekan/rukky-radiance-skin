import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        {" "}
        <ul>
          <li>
            <Link to="https://github.com/Rukiyat-Olalekan">
              <FaInstagram size="40px" />
            </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/profile.php?id=61553868952762">
              <FaFacebook size="40px" />
            </Link>
          </li>
          <li>
            <Link to="https://twitter.com/TheDevRukky">
              <BiLogoTwitter size="40px" />
            </Link>
          </li>
          <li>
            <Link to="https://www.pinterest.com/rukk__y/">
              <BsPinterest size="40px" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.routes}>
        {" "}
        <ul>
          <li>
            <Link to="/information">Information</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/terms-and-conditions">Terms & Condition</Link>
          </li>
          <li>
            <Link to="/help-and-support">Help and Support</Link>
          </li>
        </ul>
      </div>
      <div className={classes.reserved}>
        <p>
          &copy; {new Date().getFullYear()} Rukky Radiance Skin. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
