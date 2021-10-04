import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-2 item">
              <h3>Classes</h3>
              <ul>
                <li>
                  <a href="/">Imagination Classes</a>
                </li>
                <li>
                  <a href="/">Sains Classes</a>
                </li>
                <li>
                  <a href="/">Gaming Classes</a>
                </li>
                <li>
                  <a href="/">More....</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <h3>About</h3>
              <ul>
                <li>
                  {/* <a href="/">Classes</a> */}
                 <NavLink to='/home'>
                Home
                 </NavLink>
                </li>
                <li>
                  {/* <a href="/">Classes</a> */}
                 <NavLink to='/class'>
                 ALL Classes
                 </NavLink>
                </li>
                <li>
                  {/* <a href="/">Teacher</a> */}
                  <NavLink to='/gallary'>
                 GALLARY
                 </NavLink>
                </li>
                <li>
                  {/* <a href="/">School</a> */}
                  <NavLink to='/about'>
                 About Us
                 </NavLink>
                </li>
                <li>
                  {/* <a href="/">School</a> */}
                  <NavLink to='/contact'>
                 Contact Us
                 </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>RAJON SCHOOL</h3>
              <p>
                A Rajon school is an educational environment where children go
                to learn from a teacher Learning may take place in the
                classroom, in outside environments or on visits to other places.
                Colleges and universities are places to learn for students over
                17 or 18 years of age. Vocational schools teach skills people
                need for jobs.
              </p>
            </div>
          </div>
          <p className="copyright">RAJON SCHOOL © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
