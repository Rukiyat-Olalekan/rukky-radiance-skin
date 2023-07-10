import { useState } from 'react';
import Header from './components/Layout/Header';
import AvailableProducts from './components/Products/AvailableProducts';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevState) => !prevState)
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
        { showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onClick={showCartHandler} />
      <AvailableProducts />
    </CartProvider>
  );
}

export default App;
