import React from 'react'
import me from '../../../assets/images/me.jpg'
import githubLogo from '../../../assets/images/GitHub_Logo.png'
import linkedinLogo from '../../../assets/images/linkedin.png'
import codePenLogo from '../../../assets/images/codepen.png'
import cvLogo from '../../../assets/images/cv.png'


import './introduction.scss'

export default function IntroductionText() {
    return (
        <div className="about-main-container">

            <div className="about-me-info-container">
                <div className="about-me-text">
                    <p>
                        23 years old, born in Sofia, Bulgaria, currently based in Munich.
                    <br />
                        Full Stack javascript Web Developer with frontend specialization, with 1+ year professional experience.
                </p>
                </div>

                <div className="about-me-icons">
                    <img src={githubLogo} alt="Git logo" className="about-me-icon" />
                    <img src={linkedinLogo} alt="Linkedin logo" className="about-me-icon" />
                    <img src={codePenLogo} alt="Codepen logo" className="about-me-icon" />
                    <img src={cvLogo} alt="CV logo" className="about-me-icon" />
                </div>
            </div>

            <div className="my-picture-container">
                <img src={me} alt="My face" className="my-picture" />
            </div>
        </div>
    );
}