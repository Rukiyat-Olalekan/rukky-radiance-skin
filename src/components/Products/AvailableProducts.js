import React, { useEffect, useState } from "react";

import { app } from "../../firebaseConfig";

import classes from "./AvailableProducts.module.css";
import ProductLists from "./Product/ProductLists";
import StockLists from "./Stock/StockLists";

const AvailableProducts = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://rukky-radiance-default-rtdb.firebaseio.com/products.json"
        );
        if (response.ok === false) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();

        const dataArray = [];

        for (let key in data) {
          dataArray.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
            productImageUrl: data[key].productImageUrl,
          });
        }
        setFetchedData(dataArray);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchProduct();
  }, []);

  return (
    <section className={classes["available-products"]}>
      {error ? (
        <p className={classes.error}>{error}</p>
      ) : (
        <ProductLists items={fetchedData} />
      )}
      <StockLists items={fetchedData} />
    </section>
  );
};

export default AvailableProducts;
