import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="bg-div">
        {/* <p className="bg-para">PanWines</p> */}
        <img src="../../../images/login-image.png" alt="banner" />
      </div>
      <div className="form-div">
        <p className="form-p">Sign in to PanWines</p>
        <form>
          <input type="email" placeholder="Email Address" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Sign in</button>
          <div>
            <p>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
