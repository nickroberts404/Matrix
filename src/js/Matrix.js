import React, { Component, PropTypes } from 'react';
import Column from './Column.js';

export default class Matrix extends Component {
	render() {
		return (
			<div className="matrix">
				{this.props.cells.map(col => <Column cells={col} />)}
			</div>
		)
	}
}

Matrix.propTypes = {
	cells: PropTypes.array,
}

