// vertical-labels.js

import React from 'react';
import Block from './block'
import Label from './label';

var style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
}

export default class Column extends React.Component {
	render() {
		return (
			<div className="labels-vertical" style={style}>
				<Label />
			</div>
		)
	}
}