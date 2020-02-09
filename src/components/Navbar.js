import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [menuState, setMenuState] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" className={"navbar-burger burger " + (menuState ? 'is-active' : '')} aria-label="menu" onClick={() => setMenuState(!menuState)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={"navbar-menu " + (menuState ? 'is-active' : '')}>

        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
