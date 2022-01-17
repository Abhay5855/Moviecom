import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup__container">
      <form autoComplete="off">

          <h4>Not sure what to watch, See movies based on your mood!</h4>
        <h3>Sign Up</h3>

        <div className="signup__info">
          <input
            className="signup__input"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="signup__input"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="signup__btn">
          <button >Sign Up</button>
        </div>

        <div className="signup__help">
        <span >Forgot Password ?</span>

        </div>

      
      </form>
    </div>
  );
}

export default Signup;
