// block.js

import React from 'react';
import scale from '../colorscale'

var style = {
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
	height: '30px',
	width: '30px',
	background: '#eee',
	margin: '2px'
}

export default class Block extends React.Component {
	constructor() {
		super();
		this.state = {desc: false};
	}
	handleClick() {
		var p = this.props;
		var s = this.state;
		if (p.model < 10) {
			p.updateMatrix(p.row, p.column, p.model + 1)
		} 
	}
	render() {

		var styleCopy = Object.assign({}, style)
		styleCopy.background = scale(this.props.model);
		if(this.props.model <= 0) {
			styleCopy.border = '1px solid #ddd'
		}

		return <p 
			style={styleCopy}
			onClick={this.handleClick.bind(this)}
			className="block"></p>
	}
}