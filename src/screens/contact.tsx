import React from 'react'
import Header from '../components/UI/header/header'
import './contact.scss'
class ContactScreen extends React.Component {
	render() {
		return (
			<div className="aboutscreen-container">
				<Header content="contact" />

				<div className='content-container mail-container'>
				<i className="material-icons">mail_outline</i> <span>minkowalentin@gmail.com</span>
				</div>
			</div>
		)
	}
}

export default ContactScreen
