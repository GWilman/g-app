import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../styles/home.scss';

function Home() {
  return (
    <section id="home" className="container">
      <div className="columns margin-none">
        <div className="column is-1"></div>
        <div className="column is-4 center-everything">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="general-transition"
            unmountOnExit
            appear
          >
            <div>
              <h1 className="title is-1">Hi, I'm George</h1>
              <h2 className="subtitle">I'm a developer based here in London, currently working as a Software Engineer at AI event networking company, <a href="https://grip.events/" target="_blank">Grip</a>.</h2>
              <h2 className="subtitle">This site is maintained as a place for people to get in touch with me and somewhere that I review films I've seen <NavLink to="/blog">(check out my blog)</NavLink>.</h2>
            </div>
          </CSSTransition>
        </div>
        <div className="column is-6">

        </div>
        <div className="column is-1"></div>
      </div>
    </section>
  );
}

export default withRouter(Home);
