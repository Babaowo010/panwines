import React, { Component } from "react";
import "../Forget/forget.css";
import { Link } from "react-router-dom";

function Forget() {
  return (
    <div className="ogini">
      <div className="login">
        <div className="bg-div">
          <img src="./images/Rectangle 8.png" alt="banner" />
        </div>
        <div>
          <p className="bg-para">PanWines</p>
        </div>
      </div>
      <div className="into">
        <p className="win11">Reset Password</p>
        <form className="mof2">
          <input
            type="oldpassword"
            placeholder="Old Password"
            name="oldpassword"
          />

          <input
            type="newpassword"
            placeholder="New Password"
            name="newpassword"
          />
          <input
            type="confirmpassword"
            placeholder="Confirm Password"
            name="confrmpassword"
          />
        </form>
        <button className="mit3" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Forget;
