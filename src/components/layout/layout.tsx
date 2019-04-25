import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './layout.scss';
import { withStyles } from '@material-ui/core';
import { History } from 'history';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

const styles = {
	root: {
		height: 40,
		background: '#7b7b7b',
		color: 'white'
	},
};

interface IStyleProps {
	classes: {
		root: string;
	}
	history: History
}

class Layout extends Component<IStyleProps> {

	render() {
		return (
			<Paper square={true} elevation={10} classes={this.props.classes}>
				<div className="layout-container" >
					<span className="layout-btns" onClick={() => this.props.history.push('/')} >About</span>
					<span className="layout-btns" onClick={() => this.props.history.push('/projects')}>Projects</span>
					<span className="layout-btns" onClick={() => this.props.history.push('/contact')}>Contact</span>
				</div>
			</Paper>
		)
	}
}

export default compose<IStyleProps, {}>(
	withRouter,
	withStyles(styles),
)(Layout);

