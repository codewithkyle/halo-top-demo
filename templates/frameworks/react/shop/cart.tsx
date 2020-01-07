import React, { Component } from 'react';

/** CSS */
import './cart.scss';

export class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<h1>Build Your Pint Pack</h1>
				<div id="details">
					<dl>
						<dt>4 Pints</dt>
						<dd>$45</dd>
						<dt>8 Pints</dt>
						<dd>$64</dd>
					</dl>
					<span>Shipping included</span>
				</div>
			</div>
		);
	}
}
