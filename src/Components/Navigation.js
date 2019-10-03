import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Vectors/logo.png";
import { CLIENT_ROUTES } from "../constants";

export default function Navigation(props) {
  const [active, setActive] = useState(window.location.pathname);

  return (
    <div className="navigation">
      <nav className="page-links">
        <div className="logo">
          <Link to={CLIENT_ROUTES.HOME} onClick={() => setActive(CLIENT_ROUTES.HOME)}>
            <img src={Logo} alt="Fight Club Jiu-Jitsu" />
          </Link>
        </div>
        <ol>
          <li className={`page-link ${active === CLIENT_ROUTES.INSTRUCTORS && "page-link-active"}`} onClick={() => setActive(CLIENT_ROUTES.INSTRUCTORS)}>
            <Link to={CLIENT_ROUTES.INSTRUCTORS}>Instructors</Link>
          </li>
          <li className={`page-link ${active === CLIENT_ROUTES.TIME_TABLE && "page-link-active"}`} onClick={() => setActive(CLIENT_ROUTES.TIME_TABLE)}>
            <Link to={CLIENT_ROUTES.TIME_TABLE}>Time Table</Link>
          </li>
          <li className={`page-link ${active === CLIENT_ROUTES.ABOUT && "page-link-active"}`} onClick={() => setActive(CLIENT_ROUTES.ABOUT)}>
            <Link to={CLIENT_ROUTES.ABOUT}>About Us</Link>
          </li>
          <li className={`page-link ${active === CLIENT_ROUTES.CONTACT && "page-link-active"}`} onClick={() => setActive(CLIENT_ROUTES.CONTACT)}>
            <Link to={CLIENT_ROUTES.CONTACT}>Contact</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
