import React from 'react'
import './skills.css'
import Seperator from "../../common/seperator/index";
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
function Skills() {
  const data = SkillsData;
  return (
    <div className='skills'>
      <Seperator/>
      <label className='section-title'>Skills</label>
      <div>
      {data.map((skill) => {
          return (
            <div className='skills-section'>
              <label className='skills-section-title'>{skill.type}</label>
              <div className='skills-list'>
                {skill.list.map((skill)=>{
                  return(
                    <div>
                      <SkillCard skill={skill}/>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills