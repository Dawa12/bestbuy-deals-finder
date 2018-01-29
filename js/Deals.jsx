// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  // border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-align: center;

  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  // align-items: center;
`;

const Product = styled.div`
  align-content: space-between;
`;

const Image = styled.img`
  width: 46%;
  // text-align: center;
  margin: 0 auto;
  margin-right: 10px;
  max-width: 200px;
  max-height: 200px;
`;

const Deals = (props: { results: array }) => {
  let utilSpace;

  // <Wrapper className="show-card">
  if (props.results.length > 0) {
    utilSpace = props.results.map(result => (
      <Wrapper className="show-card" to={`/details/${result.sku}`}>
        <Product className="product" key={result.sku}>
          <div className="product-text">  
            <p>Name:{result.name}</p> 
            <p>Price: {result.regularPrice}</p>
          </div>
          {/* <Link to={`/details/${result.sku}`}> Browse All</Link> */}
          <Image className="product-image" src={result.image} alt="" />
        </Product>
      </Wrapper>
    ));
    // } else {
    //   utilSpace = <div>No results</div>;
  }

  // </Wrapper>

  return <div>{utilSpace}</div>;
};

export default Deals;
