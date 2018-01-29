// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>BBY App</h1>
    <h3>Welcome</h3>
    <Link to="/search">Find Deals</Link>
    {/* <Link to="/deals">Great Deals</Link> */}
  </div>
);

export default Landing;
