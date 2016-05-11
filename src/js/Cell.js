import React, { Component, PropTypes } from 'react'

export default class Cell extends Component {
	render() {
		return <p>Welcome to Neptune</p>
	}
}

Cell.propTypes = {
	data: PropTypes.object,
	style: PropTypes.object,
	onClick: PropTypes.func,
	getColor: PropTypes.func,
}

