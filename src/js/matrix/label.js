// label.js

import React from 'react';

var style = {
	height: '0px',
	width: '30px',
	margin: '2px',
	background: 'skyblue',
	fontFamily: 'Lato',
	fontWeight: 200,
	transform: 'translate(-10px, -14px) rotate(-90deg)',
	transformOrigin: ''
}

export default class Label extends React.Component {
	render() {
		return <div className="label" style={style}>Node</div>
	}
}