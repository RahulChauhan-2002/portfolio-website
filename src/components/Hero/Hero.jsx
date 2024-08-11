import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile} alt="" />
      <h1><span>Hi I'm Rahul Chauhan,</span> frontend developer.</h1>
      <p>I am a frontend developer skilled in React, HTML, CSS, and JavaScript, creating dynamic, responsive web applications.</p>
      <div className="hero-action">
        <div className="hero-contact">
        <AnchorLink className="anchor-link" offset={50} href='#contact'>Contact me</AnchorLink>
        </div>
        <div className="hero-resume">
          My resume
        </div>
      </div>

    </div>
  )
}

export default Hero