/// <reference path="./shop.d.ts" />

import React, { Component } from 'react';
import './product-grid.scss';
import { ProductComponent } from './product';

interface ProductGridProps {
	products: Array<Product>;
	selectedProducts: Array<Product>;
	callback: Function;
}

interface ProductGridState {}

export class ProductGrid extends Component<ProductGridProps, ProductGridState> {
	public props: ProductGridProps;
	constructor(props: ProductGridProps) {
		super(props);
	}

	private renderProduct = (product: Product, i: number) => (
		<ProductComponent key={i} product={product} callback={this.props.callback} selectedProducts={this.props.selectedProducts} />
	);

	render() {
		const products = this.props.products.map((product, i) => this.renderProduct(product, i));
		return (
			<div className="products">
				<div className="grid">{products}</div>
			</div>
		);
	}
}
