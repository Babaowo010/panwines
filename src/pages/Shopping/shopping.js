import React from "react";
import "../Shopping/shopping.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/nav";

function Shopping() {
  return (
    <div className="nero">
      <Navbar isShopping={true} />
      <div className="emp">
        <div className="jew">
          <p className="roy">Your Shopping Cart is Empty</p>
          <p className="pag">
            Explore our product page to add item(s) to your cart
          </p>
        </div>

        <div className="exxpr">Explore Products</div>
      </div>
    </div>
  );
}

export default Shopping;
