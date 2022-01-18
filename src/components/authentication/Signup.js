import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup">
      <h2>Movicom</h2>

      <form className="signup__form" autoComplete="off">
        <input type="text" placeholder="Enter a user name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Password" />

        <button type="submit" className="signup__button">
          Sign Up
        </button>

        <div className="signin__btn">
          <p>
            Already Have a account ? <span>Sign in</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
