import React from "react";
import "../Signup/signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="key">
      <div className="login">
        <div className="bg-div">
          <img src="./images/Rectangle 8.png" alt="banner" />
        </div>
        <div>
          <p className="bg-para">PanWines</p>
        </div>
      </div>
      <div className="into">
        <p className="win1">Create an account</p>
        <form className="mof">
          <input type="fullname" placeholder="Full Name" name="fullname" />
          <input
            type="phonenumber"
            placeholder="Phone Number"
            name="phonenumber"
          />
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password1" placeholder="Password" name="password" />
        </form>
        <p className="rest">
          <Link className="up1" to={"/forget"}>
            Forgot Password?
          </Link>
        </p>
        <div className="mess1">
          <button className="mit1" type="submit">
            Create Account
          </button>
          <p className="ink">OR</p>
          <button className="mit2" type="submit">
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
