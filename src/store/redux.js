const [showCart, setShowCart] = useState(false);

const showCartHandler = () => {
  setShowCart((prevState) => !prevState);
};

const closeCartHandler = () => {
  setShowCart(false);
};

<CartProvider>
<Suspense fallback={<div>Loading...</div>}>
  {showCart && <Cart onCloseCart={closeCartHandler} />}
</Suspense>
<Header onClick={showCartHandler} />
<AvailableProducts />
<Footer></Footer>
</CartProvider>