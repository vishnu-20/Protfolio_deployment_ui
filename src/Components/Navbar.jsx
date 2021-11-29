import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="container-fluid man_nav_con ">
      <nav className="navbar_container container">
        <div className="navbar_heading">
          <Link to="/" className="nav_brand_item">
            Vishnu lal{" "}
          </Link>
        </div>
        <div className="navbar_item_container">
          <div className="nav_item_home_blog">
            <Link to="/" className="nav_child">
              Home
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
