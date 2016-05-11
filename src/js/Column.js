import React, { Component, PropTypes } from 'react';

export default class Column extends Component {
	render() {
		return (
			<div className="column">
				{this.props.cells}
			</div>
		)
	}
}

Column.propTypes = {
	cells: PropTypes.array,
}

