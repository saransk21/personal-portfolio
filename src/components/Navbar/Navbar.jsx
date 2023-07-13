import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { Link as L } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div>
        <div className="nav-title">
          <h4>SARAN KUMAR</h4>
        </div>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <L className="link" to="/about">
              About
            </L>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <L className='link' to="/" >
                Projects
              </L>
            </Link>
          </li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
