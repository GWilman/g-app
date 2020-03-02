import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import '../styles/home.scss';

function Home() {
  return (
    <section id="home" className="container">
      <div className="columns margin-none">
        <div className="column is-1 is-hidden-mobile"></div>
        <div className="column is-4 is-12-mobile center-everything">
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
        <div className="column is-6 is-12-mobile center-everything">
          <CSSTransition
            in={true}
            timeout={400}
            classNames="general-transition"
            unmountOnExit
            appear
          >
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification">
                      <p className="title margin-half--bottom">About this site</p>
                      <div className="content">
                        <p>This little web app was built with React (Hooks) and interacts with a PostgreSQL / Node.js back end which I built to store and serve some data and send emails.</p>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification">
                    <p className="title margin-half--bottom">Get in touch</p>
                    <div className="content">
                      <p>Send me an email and I'll get back to you as soon as possible.</p>
                      <NavLink to="/contact" className="button is-primary is-rounded is-small">Email me</NavLink>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <div className="content">
                    <div className="content">
                      <p>JavaScript / Angular / React / AngularJS / WordPress / SCSS</p>
                      <p>Node.js / Python / MySQL / PostgreSQL / MongoDB</p>
                      <p>AWS / Lambda / S3 / Amplify / AppSync / CodePipeline</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="column is-1 is-hidden-mobile"></div>
      </div>
    </section>
  );
}

export default withRouter(Home);
