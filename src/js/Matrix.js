import React, { Component, PropTypes } from 'react';
import { matrixStyle, cellStyle } from './Styles.js';
import Column from './Column.js';
import Cell from './Cell.js';

// color('#F36B6B').mix(color('white'), data.val/10).hexString()
export default class Matrix extends Component {

	generateCells() {
		var { data, cellData, cellClick } = this.props; // Leaving out cellStyle because scoping issue
		return data.map((col, i) => col.map((cell, j) => {
			return <Cell 
				data={cellData(cell, i, j)} // Using i and j to denote col and row respectively
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
	data: PropTypes.array.isRequired, // A 2d array of values or objects
	cellData: PropTypes.func, // A function that determines what the cell's value will be
	cellStyle: PropTypes.func, // A function that determines the cell's style
	cellClick: PropTypes.func, // An event handler, triggered when cell is clicked
}

Matrix.defaultProps = {
	cellData: (cell, col, row) => cell, // Returns the value at data[col][row]
	cellStyle: (defaultStyle, data) => defaultStyle, // Return the default cell style
	cellClick: (data) => console.log('You clicked me!'), // Log 'You clicked me!' on being clicked
}

