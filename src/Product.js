import React, { Component } from 'react';
import './App.scss';


class Product extends Component {
  render() {
      let prod = this.props.product;
      let formattedPrice = formatPrice(prod.price, prod.currencyId);
    return (
      <div className="productinfo">
      <img src={require(`./static/data/products/${prod.sku}_1.jpg`)}/>
      <p>{prod.title}</p>
      <p>{prod.currencyFormat}{formattedPrice}</p>
      <div>Add to Cart</div>
      </div>
      );
  }
}
;

const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};



export default Product;