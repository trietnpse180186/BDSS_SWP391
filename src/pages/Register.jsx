import React from "react";
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
              pattern="[A-Za-z0-9]{6,}"
              required
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
