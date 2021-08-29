import React from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";
function HomeScreen() {
  return (
    <div className="content">
      <div className="main">
        <Filter />
        <Products />
      </div>
      <div className="sidebar">
        <Cart />
      </div>
    </div>
  );
}

export default HomeScreen;
