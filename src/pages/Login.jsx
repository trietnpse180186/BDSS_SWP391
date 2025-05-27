import React from "react";
import "./Login.css";
import { Link } from "react-router";
export default function Login() {
  return (
    <>
      <div className="face">
        <div className="content">
          <h1>Login</h1>
          <form onsubmit="event.preventDefault()">
            <div className="field-wrapper">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="field-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </div>
            <br></br>
            <div className="field-wrapper">
              <input
                className="wrap-submit"
                type="submit"
                onclick="showThankYou()"
              />
            </div>
            <br></br>
            <span>
              <Link to={"/register"} className="link-no">
                Register here!
              </Link>
            </span>
          </form>
          <Link to={"/"} className="link-no">
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
}
