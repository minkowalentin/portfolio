import React from 'react'

import Header from '../components/UI/header/header'
import IntroductionText from '../components/about/introduction/introduction';
import SkillsArea from '../components/about/skills/skills';
import skills from '../data/skills';
import Skill from '../interfaces/skill'
import Typist from 'react-typist';
import './about.scss'

class AboutScreen extends React.Component {
	
	render() {
		const frontendSkills: Skill = skills[0]
		const backendSkills: Skill = skills[1]

		return (
			<div className="aboutscreen-container">
				<Header content="about" />
				<div className="content-container">
				<Typist 
				avgTypingDelay={30}
				stdTypingDelay={0}
				cursor={{
					show:false
				}}
				className="main-header"
				>
					My name is Valentin Minkov. I am a Full Stack Web Developer.
				</Typist>
				<IntroductionText/>
				<div className="skills-container" >
					<SkillsArea skill={frontendSkills}/>
					<SkillsArea skill={backendSkills}/>
				</div>

				</div>
			</div>
		)
	}
}

export default AboutScreen
