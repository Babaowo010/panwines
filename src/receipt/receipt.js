import React from "react";
import "./receipt.css";
function Receipt() {
  return (
    <div class="Receipt">
      <div class="Receipt1">
        <h1>PanWines</h1>
        <p>Street Address</p>
        <p>City, Country</p>
        <p>Email</p>
      </div>
      <div class="Trans">
        <h3>Transaction Details</h3>
      </div>
      <div class="Div">
        <p>Payment Method</p>
        <p>Credit Card</p>
      </div>
      <div class="Div">
        <p>Name</p>
        <p>Adeboye Adewale</p>
      </div>
      <div class="Div">
        <p>Invoice Number </p>
        <p>024745524</p>
      </div>
      <div class="Div">
        <p>Transaction Date</p>
        <p>10/07/2023</p>
      </div>
      <div class="Div">
        <p>Transaction Time</p>
        <p>10:20Am</p>
      </div>

      <div class="Div">
        <div class="Div1">
          <h3>Qty</h3>
          <h3>Item(s)</h3>
        </div>
        <div>
          <h3>Price per unit</h3>
        </div>
      </div>

      <div class="Div">
        <div class="Div22">
          <p>1</p>
          <p>Merlot:Red</p>
        </div>
        <p>$12,000</p>
      </div>
      <div class="Div">
        <div class="Div22">
          <p>3</p>
          <p>Pinot Noir</p>
        </div>
        <p>$12,000</p>
      </div>

      <div class="Div">
        <div class="Div22">
          <p>2</p>
          <p>Dolcetor</p>
        </div>
        <p>$12,000</p>
      </div>
      <div class="Div3">
        <h3>Subtotal</h3>
        <h3>$72,000</h3>
      </div>
      <div class="Div3">
        <h3>Delivery</h3>
        <h3>$400</h3>
      </div>
      <div class="Div3">
        <h3>Grand Total</h3>
        <h3>$76,000</h3>
      </div>

      <h2 class="Thanks">Thanks For Your Patronage</h2>

      <button class="Butt">Print Receipt</button>
    </div>
  );
}

export default Receipt;
