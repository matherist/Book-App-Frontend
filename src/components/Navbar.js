import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => (
  <nav className={navClass}>
    <ul>
      {["Home", "About", "Products", "Contact"].map((section) => (
        <li key={section}>
          <NavLink
            to={`/${section.toLowerCase()}`}
            activeClassName="active"
            className={`${linkClassName} nav-link`}
            onClick={onClick}
          >
            {section}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
