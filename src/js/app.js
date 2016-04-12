// app.js

import React from 'react';
import Matrix from './matrix/matrix.js'
import d3 from 'd3';
import _ from 'lodash';

var model = createMatrix(10, 10, 0);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {model: model};
	}
	updateMatrix(row, column, value) {
		var newModel = _.cloneDeep(this.state.model)
		newModel[column][row] = value;
		this.setState({model: newModel});
	}
	render() {
		return <Matrix 
			model={this.state.model}
			updateMatrix={this.updateMatrix.bind(this)}
		/>
	}
}

function createMatrix(rows, columns, initial=false) {
	return d3.range(columns).map( ()=> d3.range(rows).map( ()=> Math.floor(Math.random() * 11)))
}