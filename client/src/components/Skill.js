import React from 'react';

const Skill = (props) => {
    return (
        <div>
            <div><h1>{props.title}</h1></div>
            <div>{props.description}</div>
            <br/>
            <div>{props.rating}</div>
            <button>delete</button>
            
        </div>

    )
}



export default Skill