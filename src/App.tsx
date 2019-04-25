import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';

import Layout from './components/layout/layout';
import RouterComponent from './screens/router';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app-body">
					<header className="App-header">
						<Layout />
						<RouterComponent />
					</header>
				</div>
			</Router>
		);
	}
}

export default App;
