import React from 'react'
import './projects.css'
import { projectData } from '../../data/project'
import ProjectCard from './project-card';
import Seperator from '../../common/seperator';

function Projects() {
  const data = projectData;
  return (
    <div className='projects'>
      <Seperator/>
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project = {project}/>
        })}
      </div>
    </div>
  )
}

export default Projects