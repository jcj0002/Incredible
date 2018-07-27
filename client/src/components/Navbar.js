import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.signOut}>Sign Out</button>
                <Link to = "/skills">Skills</Link>
            </div>
        );
    }
}

export default Navbar;