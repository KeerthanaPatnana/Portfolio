import React from 'react'
import './body.css'
import About from './about'
import Projects from './projects'
import Skills from './skills'
import Work from './work'
import Contact from './contact'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id = 'projects'>
        <Projects/>
      </section>
      <section id = 'skills'>
        <Skills/>
      </section>
      <section id='work'>
        <Work/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body