import React, { Component } from 'react'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { saveAuthTokens, userIsLoggedIn, setAxiosDefaults, clearAuthTokens } from './utils/SessionHeaderUtil'
import UserSkills from './components/UserSkills'

class App extends Component {

  state = {
    signedIn: false,
    skills: []
  }

  async componentDidMount() {
    const signedIn = userIsLoggedIn()
    let skills = []

    if (signedIn) {
      setAxiosDefaults()
      skills = await this.fetchSkills()
    }
    this.setState({ skills, signedIn })
 
  }
  fetchSkills = async () => {
    const response = await axios.get('/skills')
    return response.data
  }
  


  signUp = async (email, password, password_confirmation) => {
    try {
      const payload = {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
      const response = await axios.post('/auth', payload)
      saveAuthTokens(response.headers)

      this.setState({ signedIn: true })

    } catch (error) {
      console.error(error)
    }
  }

  signIn = async (email, password) => {
    try {
      const payload = {
        email,
        password
      }
      const response = await axios.post('/auth/sign_in', payload)
      saveAuthTokens(response.headers)

      const skills = await this.fetchSkills()

      this.setState({
        skills,
        signedIn: true
      })

    } catch (error) {
      console.error(error)
    }
  }
  signOut = async (event) => {
    event.preventDefault()
    await axios.delete('/auth/sign_out')
    clearAuthTokens()

    this.setState({ signedIn: false })
  }
  deleteSkills = async (id) => {
    await axios.delete(`/posts/${id}`)
    const skills = await this.fetchSkills()
    this.setState({ skills })
  }

  render() {

    const SignUpLogInComponent = () => (
      <SignUpLogIn
        signUp={this.signUp}
        signIn={this.signIn} />
    )
    const UserSkillsComponent = () => {
      return <UserSkills
        skills={this.state.skills}
        deleteSkill={this.deletePost} />
    }

    return (
      <Router>
        <div>
          <button onClick={this.signOut}>Sign Out</button>
          <Switch>
            <Route exact path='/signUp' render={SignUpLogInComponent} />
            <Route exact path='/skills' render={UserSkillsComponent} />
          </Switch>

          {
            this.state.signedIn ?
              <Redirect to="/skills" /> :
              <Redirect to="/signUp" />

          }
        </div>
      </Router>
    )
  }
}

export default App
