import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="nav-wrapper">
      <nav>
        <div>
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/assignments" className="nav-link">
            assignments
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
