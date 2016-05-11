import React, { Component } from 'react';
import { render } from 'react-dom';
import Cell from './Cell.js';
import Matrix from './Matrix.js';
import { cellStyle } from './Styles.js';
import color from 'color';
import data from './RandomData.js';

export default class App extends Component {

	cellFactory(data) {
		var cells = data.map(col => col.map(cell => {
			return <Cell 
				data={cell}
				style={cellStyle}
				onClick={data => console.log('I\'ve been clicked!')}
				getColor={data => color('white').mix(color('lightblue'), data.val/10).hexString()} />
		}))
		return cells;
	}

	render() {
		var cells = this.cellFactory(data);
		return <Matrix cells={cells}/>
	}
}

render(<App />, document.getElementById('app'));

