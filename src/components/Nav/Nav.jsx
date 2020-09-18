import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const links = [
  {
    path: '/characters',
    title: 'Characters',
  },
  {
    path: '/episodes',
    title: 'Episodes',
  },
  {
    path: '/locations',
    title: 'Locations',
  }
];

function Nav () {
  return(
    <div className="navigation">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="navigation__link"
          activeClassName="navigation__link_active"
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Nav;