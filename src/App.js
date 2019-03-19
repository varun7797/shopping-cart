import React, { Component, Fragment } from 'react';
import './App.scss';
import SizeFilter from './SizeFilter.js';
import Header from './Header.js';
import Product from './Product.js';
import ProductList from './ProductList.js'
import products from './static/data/products.json'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <SizeFilter/>
      <ProductList products={products.products}/>
      </div>
    );
  }
}


export default App;
