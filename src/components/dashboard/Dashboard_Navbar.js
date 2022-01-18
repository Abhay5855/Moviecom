import React from "react";
import "./dashboard_navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Dashboard_Navbar() {
  return (
    <Router>
      <nav className="dashboard__nav">
        <ul>
          <li>
            <Link style={{textDecoration :'none'}} to="/">Logout</Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/home">Home</Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/community">Community</Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/mylist">List</Link>
          </li>

        </ul>
      </nav>
    </Router>
  );
}

export default Dashboard_Navbar;
