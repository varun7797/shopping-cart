import React, { Component } from 'react';
import './App.scss';
import Product from './Product.js';

class ProductList extends Component {
  render() {
    let prodlist = this.props.products;
    let items = prodlist.map((product) => {
      return(
        <div>
        <Product product={product}/>
        </div>
        );
    }
    );
    return (
       <p>{items}</p>
      );
  }
}
;

export default ProductList;