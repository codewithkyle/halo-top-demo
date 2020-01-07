/// <reference path="./shop.d.ts" />

import React, { Component } from 'react';
import { render } from 'react-dom';

/** CSS */
import './shop.scss';

/** Components */
import { Cart } from './cart';
import { ProductGrid } from './product-grid';

interface ShopState {
	products: Array<Product>;
	selectedProducts: Array<number>;
}

interface ShopProps {}

class Shop extends Component<ShopProps, ShopState> {
	public state: ShopState;
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			selectedProducts: [],
		};
	}

	private async getProducts() {
		const request = await fetch('/api/products.json', {
			headers: new Headers({
				Accpet: 'application/json',
			}),
		});
		let products = [];
		if (request.ok) {
			const response = await request.json();
			products = response.data;
		}
		this.setState({ products: products });
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		return (
			<div className="shop">
				<ProductGrid products={this.state.products} />
				<Cart />
			</div>
		);
	}
}

render(<Shop />, document.body.querySelector('#shop-root'));
