import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'





const Skill = (props) => {
    return (
        <Container>
            <div><h1>{props.title}</h1></div>
            <div>{props.description}</div>
            <br />
            <div>{props.rating}</div>
            <button onClick={() => props.deleteSkill(props.id)}>DELETE SKILL</button>
            <Link to={`/skills/${props.id}`}><button>VIEW</button></Link>


        </Container>

    )
}



export default Skill