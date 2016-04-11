// app.js

import React from 'react';
import Matrix from './matrix/matrix.js'
import d3 from 'd3';

var model = createMatrix(10, 10, 0);

export default class Index extends React.Component {
	render() {
		return <Matrix 
			model={model}
		/>
	}
}

function createMatrix(rows, columns, initial=false) {
	return d3.range(columns).map( ()=> d3.range(rows).map( ()=> Math.floor(Math.random() * 11)))
}