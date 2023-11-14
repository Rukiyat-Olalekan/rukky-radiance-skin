import React, { useState } from "react";
import styles from "./CategoryLists.module.css";

export default function CategoryLists() {
  const [showCategories, setShowCategories] = useState(false);

  const handleHover = () => {
    setShowCategories(true);
  };
  const handleClick = () => {
    setShowCategories(false);
  };

  return (
    <div className={styles["category-lists"]}>
      <p
        className={styles.category}
        onMouseEnter={handleHover}
        onClick={handleClick}
      >
        Shop by Category
      </p>
      <div className={`${styles.categories} ${showCategories ? styles["show-categories"] : ""}`}>
        <div>
          <h4>Facial Cleansers, Toners & Exfoliants</h4>
          <p>No-rinse Cleansers</p>
          <p>Facial scrubs & Masks/Physical Exfoliants</p>
          <p>Toners</p>
          <p>Cleasers</p>
          <p>Oil Cleansers</p>
          <p>Water Cleansers</p>
          <p>Chemical Exfoliants</p>
        </div>
        <div>
          <h4>Serums & Essences</h4>
          <p>Sheet Masks</p>
          <p>Serums</p>
          <p>Essences</p>
          <p>Treatments</p>
          <p>Patches</p>
          <p>Others</p>
        </div>
        <div>
          <h4>Moisturisers & Oils</h4>
          <p>Face Moisturisers</p>
          <p>Moisturizing Lotions</p>
          <p>Face Cream</p>
          <p>Facial Oils</p>
          <p>Body Oils</p>
          <p>Others</p>
        </div>
        <div>
          <h4>Sunscreen</h4>
          <p>Physical Sunscreen</p>
          <p>Chemical Sunscreen</p>
        </div>
      </div>
    </div>
  );
}
