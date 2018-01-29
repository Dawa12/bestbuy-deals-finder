import React, { Component } from 'react';
import axios from 'axios';
import Deals from './Deals';
import Header from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0;
  // border: 5px solid black;
  padding: 15px;
  left: 0;
  // width: 100%;
  overflow-x: hidden;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: 'bose',
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      product: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.bestbuy.com/v1/products((search=${this.state
          .product}))?apiKey=Co7OFUq0KXBVDH6s1QmrN9tE&format=json`
      )
      .then(res => {
        const results = res.data.products;
        console.log('response', res);
        console.log('results', results);
        this.setState({ results });
      });
  }

  render() {
    return (
      <Wrapper className="search">
        <Header
          handleChange={this.handleChange}
          product={this.state.product}
          handleSubmit={this.handleSubmit}
        />
        <Deals results={this.state.results} />
      </Wrapper>
    );
  }
}

export default Search;
