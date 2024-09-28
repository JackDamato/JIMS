import React from 'react';
import "./Navbar.css"
import linkedLogo from './linkedLogo.png';

const Navbar = () => {
return (

<nav className="navbar">
  <div className="navbar-left">
    <div className="logo">
      <a href="/">
        <img src={linkedLogo} alt="link'd"></img>
      </a>
    </div>
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