// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: 10px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  border: 5px black solid;
  width: 100%;
  background: lightblue;
`;

const Header = (props: {
  handleChange: Function,
  handleSubmit: Function,
  product: ?string
}) => (
  <Wrapper>
    <form className="header" onSubmit={props.handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        autoFocus
        value={props.product}
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  </Wrapper>
);

export default Header;
