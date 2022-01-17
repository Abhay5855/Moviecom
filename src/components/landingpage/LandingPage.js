import React from "react";
import "./landing.css";
import LandingFooter from "./LandingFooter";
import Signup from "./Signup";

function LandingPage() {
  return (
    <div>
      <Signup />

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
