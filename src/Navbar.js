import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <ul className="navbar">
        <li className="nav">
          <Link to="/">ADD_TODO</Link>
        </li>
        <li>
          <Link to="/todo">DISPLAY_TODO</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default NavBar;
