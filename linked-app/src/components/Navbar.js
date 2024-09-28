import React from 'react';
import "./Navbar.css"

const Navbar = () => {
return (

<nav className="navbar">
  <div className="navbar-left">
    <image href='/workspaces/JIMS/linked-app/public/linkedLogo.png'></image>
    <a href="/" className="logo">
      Link'd
    </a>
  </div>
  <div className="navbar-right">
  <ul className="nav-links">
      <li>
        <a href="linked-app/src/pages/GetCurrentUser.js">Log In</a>
      </li>
      <li>
        <a href="/workspaces/JIMS/linked-app/src/pages/Register.js">Create an Account</a>
      </li>
    </ul>
  </div>
</nav>
);
};

export default Navbar;