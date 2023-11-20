import Product from "../NewProducts/Product/Product";
import classes from "./StockLists.module.css";

const StockLists = (props) => {
    return (
      <div className={classes["stock-list"]}>
        <h1>Back in Stock</h1>
        <ul className={classes['stock-lists']}>
          {props.stockItems.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              productImage={item.productImageUrl}
            />
          ))}
        </ul>
      </div>
    )
  }

export default StockLists