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
                                
                               <h2> {s.title} </h2>
                                <br/>
                                {s.description}
                                <br/>
                                {s.rating}
                                
                                
                                
                            </div>
                            
                        )
                    })}
                    <Link to='/skills/new'><button> NEW SKILL</button></Link>
                   
                </div>

            );
        }
    }


export default Home;