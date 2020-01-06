import React, { Component } from 'react';
import { render } from 'react-dom';

class Shop extends Component {
	render() {
		return (
			<div className="App">
				<h1> Hello, World! </h1>
			</div>
		);
	}
}

render(<Shop />, document.body.querySelector('#shop-root'));
