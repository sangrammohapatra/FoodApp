import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/cartProvider";
import OrderDetails from "./components/Cart/CartOrderDetails";
import ThankYou from "./components/Layout/Thanks";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderDetailsIsShown, setOrderDetailsIsShown] = useState(false);
  const [thanksMsg, setThanksMsg] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showOrderDetailsHandler = () => {
    setOrderDetailsIsShown(true);
    setCartIsShown(false);
  };
  const hideOrderDetailsHandler = () => {
    setOrderDetailsIsShown(false);
    setCartIsShown(true);
  };

  const showThanksMsgHandler = () => {
    setThanksMsg(true);
    setOrderDetailsIsShown(false);
    setCartIsShown(false);
  };
  const hideThanksMsgHandler = () => {
    setThanksMsg(false);
    setOrderDetailsIsShown(false);
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {thanksMsg && <ThankYou onClose={hideThanksMsgHandler} />}
      {orderDetailsIsShown && (
        <OrderDetails
          onClose={hideOrderDetailsHandler}
          onShowcart={showCartHandler}
          showThanks={showThanksMsgHandler}
        />
      )}
      {cartIsShown && (
        <Cart
          onClose={hideCartHandler}
          onShowOrderDetails={showOrderDetailsHandler}
        />
      )}
      <Header onShowcart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
