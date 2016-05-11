import React, { Component, PropTypes } from 'react'

export default class Matrix extends Component {
	render() {
		return <p>Welcome to Naptune</p>
	}
}

Matrix.propTypes = {
	cells: PropTypes.array
}

