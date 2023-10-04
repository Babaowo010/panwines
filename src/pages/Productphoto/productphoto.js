import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/nav";
import "../Productphoto/productphoto.css";

function Productphoto() {
  return (
    <div>
      <Navbar isProductphoto={true} />
      <p className="too">Upload photo</p>
      <div className="yoke">
        <form className="moff">
          <input
            type="productname"
            placeholder="Product Name"
            name="productname"
          />
          <input
            type="productpice"
            placeholder="Product Price"
            name="productprice"
          />
          <input type="category" placeholder="Category" name="category" />
          <input type="stock" placeholder="Stock" name="stock" />
        </form>
      </div>
      <div className="lect">
        <p className="lick">Click to select image</p>
        <p className="wes">Browse</p>
      </div>
      <div className="myex">Upload</div>
    </div>
  );
}

export default Productphoto;
