import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="sack">
      <div className="login">
        <div className="bg-div">
          <img src="./images/Rectangle 8.png" alt="banner" />
        </div>
        <div>
          <p className="bg-para">PanWines</p>
        </div>
      </div>
      <div className="into">
        <p className="win">Sign in to PanWines</p>
        <form className="mof">
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Password" name="password" />
        </form>
        <div className="mess">
          <button className="mit" type="submit">
            Sign in
          </button>
          <p className="ink">
            Don't have an account?{" "}
            <Link className="up" to={"/signup"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
