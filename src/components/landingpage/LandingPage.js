import React from "react";
import "./landing.css";
import LandingFooter from "./LandingFooter";
import Login from "./Login";


function LandingPage() {
  return (
    <div>
      <Login />

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
