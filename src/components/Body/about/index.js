import React from 'react'
import './about.css'
import SocialContact from '../../common/social-contact'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello There, I am 
          <br/><span className='info-name'>Full Stack Developer</span>
          <br/>I love experimenting with the web
        </div>
        <div className='about-photo'>
          <img src={require("../../../assets/coding.png")} alt='about photo' className='picture'
          />
        </div>
      </div>
      <div className='about-bottom'>
        <SocialContact/>
      </div>
    </div>
  )
}

export default About