import Header from "./Components/Layout/Header";
import React, { Fragment, useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
const [headerCartButton, setHeaderCartButton] = useState(false);

const headerCartButtonHandler = () => {
  setHeaderCartButton(!headerCartButton);
}

  return (
    <Fragment>
     
      <Header onClick={headerCartButtonHandler}>Order your meal now!</Header>
      {headerCartButton && (<Cart onClick={headerCartButtonHandler}/>)}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
