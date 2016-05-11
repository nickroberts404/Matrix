import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {
	render() {
		var {style, getColor, data, onClick} = this.props;
		style.backgroundColor = getColor(data);
		return (
			<div 
				className="cell" 
				style={style}
				onClick={() => onClick(data)}>
			</div>
		)
	}
}

Cell.propTypes = {
	data: PropTypes.object,
	style: PropTypes.object,
	onClick: PropTypes.func,
	getColor: PropTypes.func,
}

