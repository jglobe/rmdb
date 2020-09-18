import React from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav";

import './Header.css';

function Header () {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        Rick & Morty DB
      </Link>
      <Nav />
    </div>
  );
}

export default Header;
