import React, { Component } from 'react';
import './App.scss';
import styled from 'styled-components';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewCart: false
		}

		this.cartView = this.cartView.bind(this);
	}

	cartView = () => {
    	this.setState({ viewCart: !this.state.viewCart });
  }

  render() {
  	return (
  		<Head>
  			<Shop>SHOP</Shop>
  			<Cart><img src={require(`./static/data/cart.png`)}/></Cart>
  		</Head>
  		)
  }
}

const Head = styled.div`
  grid-row: 1;
  display: grid;
`;

const Shop = styled.h1`
  text-align: center;
  font-family: arial;
`;

const Cart = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;


export default Header;