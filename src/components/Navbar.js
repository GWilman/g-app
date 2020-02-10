import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/switch.scss';

function Navbar({ theme, toggleTheme }) {

  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          ===
        </NavLink>

        <a role="button" className={"navbar-burger burger " + (menuState ? 'is-active' : '')} aria-label="menu" onClick={() => setMenuState(!menuState)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={"navbar-menu " + (menuState ? 'is-active' : '')}>

        <div className="navbar-end">
          <NavLink exact className="navbar-item" activeClassName="is-active" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-item" activeClassName="is-active" to="/blog">
            Blog
          </NavLink>
          <div className="is-hidden-desktop navbar-item" onClick={() => toggleTheme()}>
            {theme === 'dark' ? 'Light' : 'Dark'} Mode {theme === 'dark' ? <FontAwesomeIcon icon="sun" /> : <FontAwesomeIcon icon="moon" />}
          </div>
          <div className="is-hidden-touch padding--left padding--right center-everything">
            <div className="switch-container margin-half--right">
              <label className="switch">
                <input type="checkbox" onChange={() => toggleTheme()} checked={theme === 'dark'} />
                <span className={"slider " + (theme === 'light' ? 'sliderUnchecked' : 'sliderChecked')}></span>
              </label>
            </div>
            {theme === 'light' ?
              <FontAwesomeIcon icon="sun" />
            :
              <FontAwesomeIcon icon="moon" />
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
