import React from "react";
import "./dashboard.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Dashboard_Navbar() {
  return (
    <Router>
      <nav className="dashboard__nav">
        <ul>
          <li>
            <Link to="/">Logout</Link>
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/community">Community</Link>
          </li>

          <li>
            <Link to="/mylist">List</Link>
          </li>

        </ul>
      </nav>
    </Router>
  );
}

export default Dashboard_Navbar;
