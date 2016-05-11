import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
	render() {
		return <p>Welcome to Neptune</p>
	}
}

render(<App />, document.getElementById('app'));

