// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Deals from './Deals';
import Details from './Details';
import type { Match } from 'react-router-dom';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        {' '}
        {/* will only render one component, and will render the first matching component to user's path */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/deals" component={Deals} /> */}
        {/* handle 404 errors on server for real 404 errors, instead of passing them to client for historyAPI fallback */}
        {/* <Route path="/details/:id" component={Details} /> */}
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => <Details {...props} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
