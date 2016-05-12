import React, { Component } from 'react';
import { render } from 'react-dom';
import Matrix from './Matrix.js';
import color from 'color';
import data from './RandomData.js';

export default class App extends Component {

	render() {
		var config = {
			data: data
		}
		return <Matrix {...config}/>
	}

}

render(<App />, document.getElementById('app'));

