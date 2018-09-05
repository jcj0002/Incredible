import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserSkills from './UserSkills';
import Skill from './Skill';
import SkillReviews from './SkillReviews';
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'


const HomeWrapper = styled.div`
border: solid red 1px;
background: white;
height: 35vh;

`
const WelcomeWrapper = styled.div`
font-family: 'Clicker Script', cursive;
font-size: 50px;
color: white;
text-shadow: 2px 2px maroon;
text-align: center;
`





    class Home extends Component {
        state = {
            signedIn: false
        }

        render() {


            return (
                <div>
                    <h1>Home</h1>
                    <WelcomeWrapper>Welcome to Incredible</WelcomeWrapper>
                    <br/>
                    {/* {this.props.skills.map(s =>s.description)} */}
                    {this.props.skills.map((s) => {
                        return (
                            
                            <Container>
                                <HomeWrapper>
                               <h2> {s.title} </h2>
                                <br/>
                                {s.description}
                                <br/>
                                {s.rating}
                                <SkillReviews skill={s} {...this.props}/>
                                </HomeWrapper>
                                
                            </Container>
                            
                        )
                    })}
                    <Link to='/skills/new'><button> NEW SKILL</button></Link>
                   
                </div>

            );
        }
    }


export default Home;