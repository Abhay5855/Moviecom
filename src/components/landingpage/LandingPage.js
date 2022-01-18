import React from "react";
import "./landing.css";
import LandingFooter from "./LandingFooter";
import Login from "./Login";


function LandingPage() {
  return (
    <div className="landing__container">
      <Login />

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
