import React, { Component } from 'react';
import './App.scss';
import styled from 'styled-components';

class SizeFilter extends Component {
  render() {
    return (
      <Grid>
      Sizes:
      <p>
          <input
            type="checkbox"
          />
          {' '}
          XS
          <input
            type="checkbox"
          />
          {' '}
          S
          <input
            type="checkbox"
          />
          {' '}
          M
          <input
            type="checkbox"
          />
          {' '}
          X
          <input
            type="checkbox"
          />
          {' '}
          ML
          <input
            type="checkbox"
          />
          {' '}
          L
          <input
            type="checkbox"
          />
          {' '}
          XL
          <input
            type="checkbox"
          />
          {' '}
          XXL
          </p>
      </Grid>
      )
  }
}
;

const Grid = styled.div`
  grid-column: 1;
`;

export default SizeFilter;