import React, { Component } from 'react';
import axios from 'axios'

class EditSkill extends Component {
    state = {
        title: '',
        description: '',
        rating: ''
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        this.setState({
            [inputName]: userInput
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const skillId = this.props.match.params.id
        const payload = { ...this.state }
        // payload.skill_id = skillId
        // payload.skillId = this.props.skill.id
        axios.put(`/skills/${skillId}`, payload)
            .then((res) => {
                //set state to stop update on refresh
                this.props.history.push(`/skills`)
            })
        console.error('error')


    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Post</h1>
                    <input
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <input
                        placeholder="Rating"
                        type="text"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EditSkill;