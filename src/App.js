import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider"

function App() {
const [headerCartButton, setHeaderCartButton] = useState(false);

const headerCartButtonHandler = () => {
  setHeaderCartButton(!headerCartButton);
}

  return (
    <CartProvider>
     
      <Header onClick={headerCartButtonHandler}>Order your meal now!</Header>
      {headerCartButton && (<Cart onClick={headerCartButtonHandler}/>)}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
