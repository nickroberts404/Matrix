import React, { Component, PropTypes } from 'react';
import Cell from './Cell.js';
import Column from './Column.js';
import { matrixStyle, cellStyle } from './Styles.js';

// color('#F36B6B').mix(color('white'), data.val/10).hexString()
export default class Matrix extends Component {

	generateCells() {
		var { data, cellData, cellClick } = this.props; // Leaving out cellStyle because scoping issue
		return data.map((col, i) => col.map((cell, j) => {
			return <Cell 
				data={cellData(cell, i, j)}
				style={this.props.cellStyle(cellStyle, cellData(cell))}
				onClick={cellClick} />
		}))
	}

	render() {
		var cells = this.generateCells();
		return (
			<div className="matrix" style={matrixStyle}>
				{cells.map(col => <Column cells={col} />)}
			</div>
		)
	}
}

Matrix.propTypes = {
	data: PropTypes.array.isRequired,
	cellData: PropTypes.func,
	cellStyle: PropTypes.func,
	cellClick: PropTypes.func,
}

Matrix.defaultProps = {
	cellData: (cell, col, row) => cell,
	cellStyle: (defaultStyle, data) => defaultStyle,
	cellClick: (data) => console.log('You clicked me!'),
}

