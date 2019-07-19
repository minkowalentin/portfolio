import React from 'react'

import Header from '../components/UI/header/header'
import IntroductionText from '../components/about/introduction/introduction';
import SkillsArea from '../components/about/skills/skills';
import skills from '../data/skills';
import Skill from '../interfaces/skill'
import Typist from 'react-typist';
import './about.scss'

interface IState {
	rotate: boolean;
	interval: number;
	rotateInterval: number;
  }

class AboutScreen extends React.Component<IState,any> {
	constructor(props: any) {
		super(props)
		this.state = {
			rotate:false,
			interval: 0,
			rotateInterval: 2200
		}
	  }

	  componentDidMount() {
		  const {rotateInterval} = this.state
		  this.setState({
			  interval: setInterval(() => this.rotateSkills(), rotateInterval)
		  })
	  }

	  componentWillUnmount() {
		clearInterval(this.state.interval);
	  }

	  rotateSkills = () => {
		this.setState({rotate:true})
	  }

	render() {
		const {rotate} = this.state;
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
					<SkillsArea skill={frontendSkills} rotate={rotate} />
					<SkillsArea skill={backendSkills} rotate={rotate}/>
				</div>

				</div>
			</div>
		)
	}
}

export default AboutScreen
