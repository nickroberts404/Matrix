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
	data: PropTypes.object,
	style: PropTypes.object,
	onClick: PropTypes.func,
}

export default Radium(Cell);
