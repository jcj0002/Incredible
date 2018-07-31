import React from 'react'
import Skill from "./Skill"
import styled from 'styled-components'

const UserSkills = (props) => {

  const skills = props.skills.map((skill) => {
    return (
      <Skill
        {...skill}
        deleteSkill={props.deleteSkill}
        key={skill.id} />
      
    )
  })

  return (
    <div>
      <h1>Skill</h1>
      {props.skills.length > 0 ? skills : null}
    </div>
  )
}

export default UserSkills