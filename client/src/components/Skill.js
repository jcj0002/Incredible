import React from 'react'
import axios from 'axios'






const Skill = (props) => {
    return (
        <div>
            <div><h1>{props.title}</h1></div>
            <div>{props.description}</div>
            <br/>
            <div>{props.rating}</div>
            <button onClick={()=> props.deleteSkill(props.id)}>DELETE SKILL</button>
            <button onClick={()=> props.updateSkill(props.id)}>EDIT</button>
            
        </div>

    )
}



export default Skill