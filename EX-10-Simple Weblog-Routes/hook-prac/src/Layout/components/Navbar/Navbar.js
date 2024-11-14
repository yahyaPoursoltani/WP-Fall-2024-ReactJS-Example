import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">خانه</Link></li>
        <li><Link to="/about">درباره ما</Link></li>
        <li><a href="#/contact">تماس با ما</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;