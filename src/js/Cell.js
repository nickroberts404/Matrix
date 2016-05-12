import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Cell extends Component {
	render() {
		var {data, style, onClick} = this.props;
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
	data: PropTypes.object, // This cell's data
	style: PropTypes.object, // This cell's style object (can use Radium features, such as ':hover')
	onClick: PropTypes.func, // This cell's click handler
}

export default Radium(Cell); // Wraps Cell in Radium, which extends React's inline CSS capabilities
