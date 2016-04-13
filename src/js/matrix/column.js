// column.js

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
			<div className="column" style={style}>
				<Label />
				{this.props.model.map( (block, i) => <Block model={block} column={this.props.column} row={i} updateMatrix={this.props.updateMatrix} />)}
			</div>
		)
	}
}