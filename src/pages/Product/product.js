import React from "react";
import "../Product/product.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/nav/nav";

function Product() {
  return (
    <div>
      <Navbar isProduct={true} />
      <div className="cont">
        <div>
          <p className="foun">Results Found</p>
        </div>
        <div className="polar">
          <p className="by">Sort By</p>
          <input type="text" id="rel" placeholder="Relevance" />
        </div>
      </div>
      <div className="group1">
        <div className="can">
          <div className="rec">
            <img src="./images/Rectangle 55 amarone.jpg" alt="pinotwine" />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Amarone</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec1">
            <img src="./images/Rectangle 54 vina.jpg" alt="vinawine" />
          </div>
          <div>
            <div className="lan1">
              <p className="dol">Vina Ardanza</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec">
            <img src="./images/Rectangle 50 nebla.jpg" alt="neblawine" />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Nebla</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
      </div>
      <div className="group1">
        <div className="can">
          <div className="rec">
            <img
              src="./images/Rectangle 59 canaletto.jpg"
              alt="canalettowine"
            />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Dolceto</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec1">
            <img
              src="./images/Rectangle 51 clearsprings.jpg"
              alt="clearspringwine"
            />
          </div>
          <div>
            <div className="lan1">
              <p className="dol">Merlot Clearsprings</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec">
            <img src="./images/Rectangle 52 yering.jpg" alt="yeringwine" />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Yering</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
