import Header from "./Components/Layout/Header";
import React, { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
    <Fragment>
     
      <Header>Order your meal now!</Header>
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
