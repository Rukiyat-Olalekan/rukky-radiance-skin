import React, { Suspense, useState } from "react";
import Header from "./components/Layout/Header";
import AvailableProducts from "./components/Products/AvailableProducts";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Layout/Footer";

function App() {
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
        {showCart && <Cart onCloseCart={closeCartHandler} />}
      </Suspense>
      <Header onClick={showCartHandler} />
      <AvailableProducts />
      <Footer></Footer>
    </CartProvider>
  );
}

export default App;
