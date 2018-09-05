import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavbarContainer = styled.div`

background-color: #A15093;
height: 10vh;
display: flex;

button{
    height: 5vh;
    display: flex;
    justify-content: flex-end;
   
}

`


class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <button onClick={this.props.signOut}>Sign Out</button>
                <Link to = "/skills">Skills</Link>
            </NavbarContainer>
        );
    }
}

export default Navbar;