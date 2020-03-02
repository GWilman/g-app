import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/blog" component={ Blog } />} />
      <Route path="/blog/:id" component={ Blog } />} />
      <Route path="/contact" component={ Contact } />} />
    </Switch>
  );
};

export default Routes;
