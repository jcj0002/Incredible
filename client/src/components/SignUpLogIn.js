import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Form } from 'semantic-ui-react'


const SignUpLogInWrapper = styled.div`
width: 40vw;
height: 40vh;
/* display:flex;
justify-content: center;
align-items: space-around; */
margin-top: 20vh;
margin-left: 30vw;

h1{
    color:white;
    font-size: 250px;
    font-family: 'Clicker Script', cursive;
    text-shadow: 4px 4px maroon;
    text-align:center;
    
    
}


`

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
            .then(() => {
                return (
                    this.props.history.push(`/home`)
                )
            })
    }

    handleChange = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            
            <SignUpLogInWrapper>
                <h1>Innncredible</h1>
                <br/>
                <h2>New User? Sign up.</h2>
                <h2>Returning User? Sign in.</h2>
                <Form>
                    <Form.Field>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                            value={this.state.password_confirmation} />
                    </Form.Field>

                    <Button onClick={this.signUp}>Sign Up</Button>

                    <Button onClick={this.signIn}>Log In</Button>
                </Form>
             
            </SignUpLogInWrapper>
            
        )
    }
}

export default SignUpLogIn