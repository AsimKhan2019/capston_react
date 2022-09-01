import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, MagnifyGlass } from '../icons';

const NavBar = () => (
  <header className="topNav">
    <NavLink to="/details">
      <ChevronLeft />
    </NavLink>
    <h1>US Population</h1>
    <div className="search">
      <MagnifyGlass />
    </div>
  </header>
);

export default NavBar;
