import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/navbar.scss';
import '../styles/switch.scss';

function Navbar({ theme, toggleTheme }) {

  const [menuState, setMenuState] = useState(false);

  return (
    <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          <div className="center-everything">
            <svg width="20px" height="20px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="SnellRoundhand, Snell Roundhand" fontSize="232" fontWeight="normal" letterSpacing="-1.55018306">
                    <text id="g-logo">
                        <tspan x="0" y="191">G</tspan>
                    </text>
                </g>
            </svg>
          </div>
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
