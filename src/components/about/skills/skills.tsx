import React, {Component} from 'react'
import Skill from '../../../interfaces/skill'
import './skills.scss'


type MyProps = { skills: Skill[] };

export default class SkillsArea extends Component<MyProps>{
    render() {
      const {skills} = this.props
    return (
    <div className="skills-container">
          {skills.map((value, index) => {
          return (
          <div key={index} className ={`skill-section ${value.title.toLocaleLowerCase()}`}>
            <p  className ={"skills-header"} >{value.title} skills</p>
            {value.skills.map((skill, i) => { 
            return (
            <li className="skill" key={i}>{skill}</li>
            )
            })}
          </div>)
          })}
        </div>  
    );
  }
}