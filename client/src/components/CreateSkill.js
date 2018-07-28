import React, { Component } from 'react';
import axios from 'axios'
class CreateSkill extends Component {
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
        const skill = this.props.match.params.skill
        const payload = {...this.state}
        payload.current_user = this.props.current_user
        payload.skill = skill
        axios.post(`/skills`, payload)
        .then(res=> {
            this.props.history.push(`/skills`)
        })
        console.error('error')
        
            
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create New Post</h1>
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

export default CreateSkill