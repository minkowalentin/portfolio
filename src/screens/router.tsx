import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AboutScreen from '../screens/about';
import ContactScreen from '../screens/contact';
import ProjectsScreen from '../screens/projects';


class RouterComponent extends React.Component {

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={AboutScreen} />
					<Route exact path="/contact" component={ContactScreen} />
					<Route exact path="/projects" component={ProjectsScreen} />
				</Switch>
			</div>
		)
	}

}

export default RouterComponent