import React, { Component } from 'react';
import { render } from 'react-dom';
import Cell from './Cell.js';
import Matrix from './Matrix.js';
import data from './RandomData.js';

export default class App extends Component {

	cellFactory(data) {
		var cells = data.map(col => col.map(cell => {
			return <Cell 
				data={cell}
				style={{}}
				onClick={data => console.log('I\'ve been clicked!')}
				getColor={data => '#bada55'} />
		}))
		return cells;
	}

	render() {
		var cells = this.cellFactory(data);
		return <Matrix cells={cells}/>
	}
}

render(<App />, document.getElementById('app'));

