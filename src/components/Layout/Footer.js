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
            <a href="https://github.com/rukkyy">
              <FaInstagram size="40px" />
            </a>
          </li>
          <li>
            <a href="https://www.aedin.com/in/rukiyat-olalekan/">
              <FaFacebook size="40px" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TheDevRukky">
              <BiLogoTwitter size="40px" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/TheDevRukky">
              <BsPinterest size="40px" />
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.routes}>
        {" "}
        <ul>
          <li>
            <a href="/story">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact">Terms & Condition</a>
          </li>
          <li>
            <a href="/contact">Work With Me</a>
          </li>
        </ul>
      </div>
      <div className={classes.reserved}><p>&copy; {new Date().getFullYear()} Rukky Radiance Skin. All rights reserved.</p></div>
    </footer>
  );
};

export default Footer;