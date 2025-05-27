import React from "react";
import "./style.css";
import { Link } from "react-router";
export default function Register() {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <h1>Register</h1>
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
          <br />
          <div className="field-wrapper">
            <input
              className="wrap-submit"
              type="submit"
              onClick={() => alert("Thank you for registering!")}
            />
          </div>
          <br />
          <Link to={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
}
