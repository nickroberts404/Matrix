import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Cell extends Component {
	render() {
		var {style, getColor, data, onClick} = this.props;
		style.backgroundColor = getColor(data);
		style.border = data.val > 0 ? 'none' : '1px solid #eee';
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

export default Radium(Cell);
