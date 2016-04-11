// index.js

console.log('Welcome to Matrix...');

import React from 'react';
import {render} from 'react-dom';
import App from './app.js'

class Index extends React.Component {
	render() {
		return <App />
	}
}

render(<Index />, document.getElementById('reactor'))