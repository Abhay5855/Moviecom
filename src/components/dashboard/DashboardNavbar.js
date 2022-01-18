import React from "react";
import "./dashboard_navbar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

function DashboardNavbar() {
  return (
    <Router>
      <nav className="dashboard__nav">
        <ul>
            <li>
                <p>Movie<span>com</span></p>
            </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/home"><i class="fas fa-home"></i></Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/community"><i class="far fa-comments"></i></Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/mylist"><i class="fas fa-plus"></i><span className="logout">My List</span></Link>
          </li>

          <li>
            <Link style={{textDecoration :'none'}} to="/"><span className="logout">Logout</span></Link>
          </li>



        </ul>
      </nav>
    </Router>
  );
}

export default DashboardNavbar;
