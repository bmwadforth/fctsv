import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Vectors/logo.png";
import { CLIENT_ROUTES } from "../constants";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="page-links">
        <div className="logo">
          <Link to={CLIENT_ROUTES.HOME}>
            <img src={Logo} alt="Fight Club Jiu-Jitsu" />
          </Link>
        </div>
        <ol>
          <li className="page-link">
            <Link to={CLIENT_ROUTES.INSTRUCTORS}>Instructors</Link>
          </li>
          <li className="page-link">
            <Link to={CLIENT_ROUTES.ABOUT}>About Us</Link>
          </li>
          <li className="page-link">
            <Link to={CLIENT_ROUTES.CONTACT}>Contact</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
