import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">خانه</a></li>
        <li><a href="/about">درباره ما</a></li>
        <li><a href="/contact">تماس با ما</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;