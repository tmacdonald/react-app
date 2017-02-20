import React, { Component } from 'react';
import { Link } from 'react-router';

class Repos extends Component {
    render() {
        return (
            <div>
                <h2>Repos</h2>

                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Route</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>
            </div>
        );
    }
}

export default Repos;