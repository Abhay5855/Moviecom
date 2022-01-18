import React from "react";
import "./login.css";
import {useHistory} from 'react-router-dom'

function Login() {
  return (
    <div className="signup__container">
      <form autoComplete="off">

          <h4>Not sure what to watch, See movies based on your mood!</h4>
        <h3>Sign In</h3>

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

        <div className="signup__help">
        <span >Forgot Password ?</span>

        </div>

        <div className="signup__btn">
          <button >Sign In</button>
        </div>

        <div className="signin__acc">
          <span>Don't Have a account? <p>Sign Up</p></span>

        </div>

       

      
      </form>
    </div>
  );
}

export default Login;
