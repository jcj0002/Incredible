import React, { Component } from 'react'
import SignUpLogIn from './components/SignUpLogIn'
import UserSkills from './components/UserSkills'
import Home from './components/Home'
import { Route, BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom'
import { saveAuthTokens, userIsLoggedIn, setAxiosDefaults, clearAuthTokens } from './utils/SessionHeaderUtil'
import axios from 'axios'
import Navbar from './components/Navbar'
import CreateSkill from './components/CreateSkill';
import EditSkill from './components/EditSkill';
import Skill from './components/Skill';



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
  // fetchSkill = async () => {
  //   const response = await axios.get('/skills/:id')
  //   return response.data
  // }

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


  deleteSkill = async (id) => {
    await axios.delete(`/skills/${id}`)
    const skills = await this.fetchSkills()
    this.setState({ skills })
    
  }
  
  

      
   


render() {

  const SignUpLogInComponent = (props) => (
    <SignUpLogIn
      {...props}
      signUp={this.signUp}
      signIn={this.signIn} />
  )
  const UserSkillsComponent = () => {
    return <UserSkills
   
      skills={this.state.skills}
      skill = {this.state.skill}
      deleteSkill={this.deleteSkill}
      />
     
  }

  const HomeComponent = () => {
    return <Home
      skills={this.state.skills} />
  }

  
  





  return (
    <Router>
      <div>

        <Navbar signOut={this.signOut} />

        <Switch>
          <Route exact path='/signup' render={SignUpLogInComponent} />
          <Route exact path='/skills' render={UserSkillsComponent} />
          <Route exact path='/home' render={HomeComponent} />
          <Route exact path='/skills/new' component={CreateSkill} />
          <Route exact path='/skills/:id' component={Skill} />
          <Route exact path='/skills/:skillId/edit' component={EditSkill} />
          
          
          

        </Switch>
        {
            this.state.signedIn ?
              null : null
              
        }

      </div>
    </Router>
  )
}
}

export default App