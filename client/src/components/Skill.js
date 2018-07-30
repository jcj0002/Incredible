import React from 'react'
import {Link} from 'react-router-dom'






const Skill = (props) => {
    return (
        <div>
            <div><h1>{props.title}</h1></div>
            <div>{props.description}</div>
            <br/>
            <div>{props.rating}</div>
            <button onClick={()=> props.deleteSkill(props.id)}>DELETE SKILL</button>
            <button onClick={()=> props.skillId(props.id)}>View SKILL</button>
            <Link to= "/skills/:id"><button>VIEW</button></Link>
            {/* <Link to={`/skills/${skill.id}`}><button>VIEW</button></Link> */}
        
        </div>

    )
}



export default Skill