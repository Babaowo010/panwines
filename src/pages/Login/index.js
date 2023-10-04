import React from "react";
import "../Login/login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="bg-div">
        {/* <p className="bg-para">PanWines</p> */}
        <img src="../../../images/login-image.png" alt="banner" />
        <div className="topleft">PanWines</div>
      </div>
      <div className="form-div">
        <p className="form-p">Sign in to PanWines</p>
        <form>
          <div className="input-div">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="acc-div">
            <button type="submit">Sign in</button>
            <p>
              Don't have an account?
              <Link to={"/signup"}>
                <p>Sign up</p>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
