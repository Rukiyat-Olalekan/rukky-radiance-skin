import React from "react";
import classes from "./AvailableProducts.module.css";
import AvailableNow from "./AvailableNow";
import ProductLists from "./Product/ProductLists";

const DUMMY = [{
  id: "p1",
  name: "olay",
  description: "olay wash",
  price: 90
}]

const AvailableProducts = () => {
  // const [fetchedData, setFetchedData] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://rukky-radiance-default-rtdb.firebaseio.com/products.json"
  //       );
  //       if (response.ok === false) {
  //         throw new Error("Something went wrong");
  //       }
  //       const data = await response.json();

  //       const dataArray = [];

  //       for (let key in data) {
  //         dataArray.push({
  //           id: key,
  //           name: data[key].name,
  //           price: data[key].price,
  //           description: data[key].description,
  //         });
  //       }
  //       setFetchedData(dataArray);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  return (
    <main className={classes["available-products"]}>
      <AvailableNow />
      {/* {error ? (
        <p className={classes.error}>{error}</p>
      ) : ( */}
        <ProductLists items={DUMMY} />
    
    </main>
  );
};

export default AvailableProducts;
