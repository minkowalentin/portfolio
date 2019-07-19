import React, { Component } from 'react'
import Skill from '../../../interfaces/skill'
import './skills.scss'

import { angularLogo, graphqlLogo, htmlLogo, nodeLogo, reactLogo, restLogo, sassLogo, sqlLogo, typescriptLogo, firstLevel, secondLevel, thirdLevel, fullLevel } from '../../../fileExports'

type MyProps = { skill: Skill, rotate: boolean };

interface IState {
  selectedSkill: string;
  selectedSkillLevel: number;
  rotate: boolean;
  hovered: boolean;
}

export default class SkillsArea extends Component<MyProps, IState>{
  constructor(props: MyProps) {
    super(props)
    this.state = {
      selectedSkill: '',
      selectedSkillLevel: 0,
      rotate: false,
      hovered: false
    }
  }

  componentDidMount = () => {
    const { skill, rotate } = this.props
    this.setState({
      selectedSkill: skill.skills[0].title,
      selectedSkillLevel: skill.skills[0].level,
      rotate: rotate
    })
  }

  componentWillReceiveProps(props: MyProps) {
    const { rotate } = props
    const { hovered } = this.state
    if (rotate && !hovered ) {
      this.skillRotate()
    }
  }

  mouseOverListItem = (skill: string, level: number) => {
    this.setState({
      selectedSkill: skill,
      selectedSkillLevel: level
    })
  }

  skillRotate = () => {
    const { skill: { skills } } = this.props
    const { selectedSkill } = this.state
    const curIndex: number = this.findIndexOfStrInObj(skills, 'title', selectedSkill)
    let nextIndex: number = curIndex === skills.length - 1 ? 0 : curIndex + 1
    this.setState({
      selectedSkill: skills[nextIndex].title,
      selectedSkillLevel: skills[nextIndex].level
    })
  }

  findIndexOfStrInObj = (object: any, objectParam: string, str: string): number => {
    let index: number = 0;
    for (let i = 0; i < object.length; i++) {
      if (object[i][objectParam] === str) {
        index = i
      }
    }
    return index
  }

  setLogoBasedOnState = (skill: string): string => {
    switch (skill.toLowerCase()) {
      case 'react':
        return reactLogo;
      case 'angular':
        return angularLogo;
      case 'html':
        return htmlLogo;
      case 'sass':
        return sassLogo;
      case 'typescript':
        return typescriptLogo;
      case 'nodejs':
        return nodeLogo;
      case 'graphql':
        return graphqlLogo;
      case 'sql':
        return sqlLogo;
      case 'rest':
        return restLogo;
      default:
        return '';
    }
  }

  setLevelBasedOnState = (level: number): string => {
    switch (level) {
      case 1:
        return firstLevel;
      case 2:
        return secondLevel;
      case 3:
        return thirdLevel;
      case 4:
        return fullLevel;
      default:
        return '';
    }
  }

  mouseHoverElement = () => {
    this.setState({
      hovered: true
    })
  }

  mouseLeaveElement = () => {
    this.setState({
      hovered: false
    })
  }

  render() {
    const { skill } = this.props
    const { selectedSkill, selectedSkillLevel } = this.state
    const logo = this.setLogoBasedOnState(selectedSkill)
    const level = this.setLevelBasedOnState(selectedSkillLevel)

    const styles = {
      backgroundStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'top',
        backgroundSize: 'contain'
      },
      levelStyle: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${level})`,
        backgroundPosition: 'top',
        backgroundSize: 'contain'
      }
    }

    return (
      <div 
      className={`skill-section ${skill.title.toLocaleLowerCase()}`}
  
      >
        <p className={"skills-header"} >{skill.title} skills</p>
        <div className="skill-content">
          <div className="skill-container"     onMouseEnter={this.mouseHoverElement}
      onMouseLeave={this.mouseLeaveElement}>
            {skill.skills.map((skill, i) => {
              return (
                <li onMouseOver={this.mouseOverListItem.bind(event, skill.title, skill.level)}
                  className="skill"
                  key={i}
                  style={skill.title.toLowerCase() === selectedSkill.toLowerCase() ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}
                >
                  {skill.title}</li>
              )
            })}
          </div>
          <div className="selected-skill-logo" style={styles.backgroundStyle}>
          </div>
          <div className={'selected-skill-container'}>
            <div className="skill-progress-bar" style={styles.levelStyle}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}