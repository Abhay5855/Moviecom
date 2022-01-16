import React from "react";
import "./signup.css";

function Signup() {
  return (
    <div className="signup__container">
      <form autoComplete="off">
        <h3>Sign Up</h3>

        <div className="signup__info">
        <input className="signup__input" type='email' placeholder='Enter your email' />
        <input className="signup__input"  type='password' placeholder='Password'/>

        </div>

         <div className="signup__btn">

         <button className="signup__btn">

Sign Up

</button>

         </div>

       

        <span>Need help?</span>


      </form>
    </div>
  );
}

export default Signup;
