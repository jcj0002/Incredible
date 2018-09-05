import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Checkbox, Form } from 'semantic-ui-react'


const SignUpLogInWrapper = styled.div`
width: 45vw;
height: 65vh;
display:flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
margin-top: 20vh;
margin-left: 30vw;
/* border: solid red; */


.ui.form input{
    background: #d6d6d6;
}


form{


width: 50vw;
height: 30vh;
background: white;
border-radius: 25px;
padding: 30px;

}





h1{
    color:white;
    font-size: 450px;
    display:flex;
    justify-content: center;
    font-family: 'Clicker Script', cursive;
    text-shadow: 6px 6px maroon;
    margin-left: 4px;
    
    
}

h2{
    color: white;
}



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
                <br />
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