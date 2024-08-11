import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile_img from '../../assets/about_profile_img.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>As a budding Frontend Developer, I am eager to begin my professional journey in the field. I have gained valuable knowledge and skills through my education and projects, and I am excited about the opportunity to contribute to the success and growth of dynamic organizations.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML </p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0+</h1>
                <p>FRESHER</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>05+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>03+</h1>
                <p>LANGUAGE KNOWN</p>
            </div>
        </div>

    </div>
  )
}

export default About