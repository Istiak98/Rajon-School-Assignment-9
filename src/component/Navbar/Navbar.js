import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid hd">
        <a className="navbar-brand mx-5 " href="#/">
          RAJON SCHOOL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent Nav_menu"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/home"
                activeClassName="selected"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/about"
                activeClassName="selected"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/class"
                activeClassName="selected"
              >
                CLASSES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/gallary"
                activeClassName="selected"
              >
                GALLARY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="Nav_link"
                to="/contact"
                activeClassName="selected"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <form className="d-flex flex-fill mx-5">
            <button
              className="btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
              type=""
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="+8801234567891"
            >
              Call:+8801234567891
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
