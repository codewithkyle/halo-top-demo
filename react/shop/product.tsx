import React, { Component } from 'react';

/** CSS */
import './product.scss';

interface ProductProps {
	key: number;
	name: string;
	image: string;
	uuid: string;
}

export class ProductComponent extends Component<ProductProps, {}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="product" tabIndex={0}>
				<img src={this.props.image} alt={`pint of ${this.props.name}`} />
				<span>{this.props.name}</span>
			</button>
		);
	}
}
