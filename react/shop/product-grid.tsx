/// <reference path="./shop.d.ts" />

import React, { Component } from 'react';
import './product-grid.scss';

interface ProductGridProps {
	products: Array<Product>;
}

interface ProductGridState {}

export class ProductGrid extends Component<ProductGridProps, ProductGridState> {
	public props: ProductGridProps;
	constructor(props: ProductGridProps) {
		super(props);
	}

	private renderProduct = (product: Product, i: number) => <div key={i}>{product.name}</div>;

	render() {
		const products = this.props.products.map((product, i) => this.renderProduct(product, i));
		return (
			<div className="products">
				<div className="grid">{products}</div>
			</div>
		);
	}
}
