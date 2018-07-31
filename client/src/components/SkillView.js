import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { setAxiosDefaults } from '../utils/SessionHeaderUtil';


class SkillView extends Component {
    state = {
        skill: {}
    }

    componentDidMount() {
        const skillId = this.props.match.params.id
        setAxiosDefaults()
        axios.get(`/skills/${skillId}`)
            .then(res => {
                this.setState({ 
                    skill: res.data
                 })
            })
            .catch((err) => {
                console.error(err)
            })

    }

    render() {
        console.log(this.state)

        return (
            <div>
                <h2>SkillView</h2>
                <div><h1>{this.state.skill.title}</h1></div>
                <div>{this.state.skill.description}</div>
                <br />
                <div>{this.state.skill.rating}</div>
                <br/>
                <Link to={`/skills/${this.state.skill.id}/edit`}><button>EDIT SKILL</button></Link>
            </div>
        );
    }
}

export default SkillView