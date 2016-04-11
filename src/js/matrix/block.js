// block.js

import React from 'react';

var style = {
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	cursor: 'pointer',
	height: '30px',
	width: '30px',
	background: '#eee',
	margin: '3px'
}

export default class Block extends React.Component {
	render() {
		return <p style={style}></p>
	}
}