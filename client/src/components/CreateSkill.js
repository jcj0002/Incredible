import React, { Component } from 'react';
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import styled from 'styled-components'


const NewSkillWrapper = styled.div`
width: 40vw;
height: 40vh;
margin-top: 20vh;
margin-left: 30vw;

`

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
            <NewSkillWrapper>
                <Form onSubmit={this.handleSubmit}>
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
                    <Button type="submit">Submit</Button>
                </Form>
            </NewSkillWrapper>
        )
    }
}

export default CreateSkill