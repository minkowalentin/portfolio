import React from 'react'

import Header from '../components/UI/header/header'
import IntroductionText from '../components/about/introduction/introduction';
import SkillsArea from '../components/about/skills/skills';
import skills from '../data/skills';
import Typist from 'react-typist';

class AboutScreen extends React.Component {
	
	render() {
		return (
			<div className="aboutscreen-container">
				<Header content="about" />
				<div className="content-container">
				<Typist 
				avgTypingDelay="30"
				stdTypingDelay="0"
				cursor={{
					show:false
				}}
				className="main-header"
				>
					My name is Valentin Minkov. I am a Full Stack Web Developer.
				</Typist>
				<IntroductionText/>
				<SkillsArea skills={skills}/>
				</div>
			</div>
		)
	}
}

export default AboutScreen
