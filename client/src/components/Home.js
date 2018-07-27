import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserSkills from './UserSkills';
import Skill from './Skill';



    class Home extends Component {
        state = {
            signedIn: false
        }

        render() {


            return (
                <div>
                    <h1>Home</h1>
                    <h2>Welcome to Incredible</h2>
                    {/* {this.props.skills.map(s =>s.description)} */}
                    {this.props.skills.map((s) => {
                        return (
                            <div>
                                {s.title}
                                <br/>
                                {s.description}
                            </div>
                        )
                    })}
                    
                   
                </div>

            );
        }
    }


export default Home;