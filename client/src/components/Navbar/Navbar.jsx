import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
         <Link to="/" className="navbar-brand">
        Teacher Hub
      </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/LearnMore"
                className={
                  window.location.pathname === "/LearnMore"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Learn More
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resources"
                className={
                  window.location.pathname === "/Resources"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
