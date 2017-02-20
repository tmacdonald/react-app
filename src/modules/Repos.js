import React, { Component } from 'react';
import { Link } from 'react-router';

class Repos extends Component {
    render() {
        return (
            <div>
                <h2>Repos</h2>

                <ul>
                    <li><Link to="/repos/reactjs/react-router" activeClassName="active">React Route</Link></li>
                    <li><Link to="/repos/facebook/react" activeClassName="active">React</Link></li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

export default Repos;