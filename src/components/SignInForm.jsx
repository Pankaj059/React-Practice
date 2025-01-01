import React from "react";
import Button from "./Button";
import "../App.css";
import eyeIcon from "../assets/img/eye.png";
import userIcon from "../assets/img/user.png";
import passIcon from "../assets/img/padlock.png";
import { Form} from "react-router";
const SignInForm = () => {
  return (
    <>
      <div className="container">
        <form action={"/"} method="get" className="form-container">
          <h1>Sign in</h1>
          <p>Welcome Back Please Enter Your Detail</p>
          <div className="main-content">
            <img src={userIcon} alt="" />
            <div className="input-container">
              <label htmlFor="username" required>
                Enter Username/Email
              </label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="main-content">
            <img src={passIcon} alt="" />
          <div className="input-container">
            <div className="password-input">
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="pass"
                placeholder="********"
                id="password"
                required
                />
              <span className="icon">
                <img src={eyeIcon} alt="eye-icon" />
              </span>
            </div>
          </div>
                </div>
          <div className="forgot-password">
            <div className="password-input">
              <input type="checkbox" className="check-box" />
            </div>
            <span>Remember Me</span>
            <a href="/" className="forgot">
              Forgot your password ?
            </a>
          </div>
          <Button name="Sign in" />
          <div className="foot">
            <span> Don't have account ?</span> <a href="/">Sign In</a>
          </div>
        </form>
      </div>

    </>

  );
};

export default SignInForm;
