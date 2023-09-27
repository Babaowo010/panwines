import React from "react";
import "./first.css";
// import { Link } from "react-router-dom";

function Vagan() {
  return (
    <div>
      <h2 className="pro">Product</h2>

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
      <div className="group1">
        <div className="can">
          <div className="rec">
            <img src="./images/Rectangle 56 pinot.jpg" alt="pinotwine" />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Pinot Noir: Aymura</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec1">
            <img src="./images/Rectangle 57 blanc.jpg" alt="vinawine" />
          </div>
          <div>
            <div className="lan1">
              <p className="dol">Sauvignon Blanc</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
        </div>
        <div className="can">
          <div className="rec">
            <img src="./images/Rectangle 58 veuve.jpg" alt="neblawine" />
          </div>
          <div>
            <div className="lan">
              <p className="dol">Veuve Cliquot</p>
              <p className="cash">#12,400</p>
            </div>
            <div className="add">Add To Cart</div>
          </div>
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
      <div className="vm">
        <a href="more">
          <li className="when">View More</li>
        </a>
        <svg
          className="gan"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 17L9 9L1 0.999998" fill="#411530" fill-opacity="0.6" />
          <path
            d="M1 17L9 9L1 0.999998"
            stroke="#4169E1"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Vagan;
