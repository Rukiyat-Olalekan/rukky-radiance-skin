import React, { Suspense, useState } from "react";
import Header from "./components/Layout/Header";
import AvailableProducts from "./components/Products/AvailableProducts";
// import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const LazyCart = React.lazy(() => import("./components/Cart/Cart"));

  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {showCart && <LazyCart onCloseCart={closeCartHandler} />}
      </Suspense>
      <Header onClick={showCartHandler} />
      <AvailableProducts />
    </CartProvider>
  );
}

export default App;
