import React from 'react'
import './header.scss'

interface IHeaderProps {
	content: string
}

export default function Header(props: IHeaderProps) {
	return (
		<div className="header-container">
			<h1 className="header">{props.content}</h1>
			<div className="header-decoration" />
		</div>
	)
}
