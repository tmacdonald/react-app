import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class Repos extends Component {
    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path);
    }
    render() {
        return (
            <div>
                <h2>Repos</h2>

                <ul>
                    <li><Link to="/repos/reactjs/react-router" activeClassName="active">React Route</Link></li>
                    <li><Link to="/repos/facebook/react" activeClassName="active">React</Link></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/> / {' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>

                {this.props.children}
            </div>
        );
    }
}

export default Repos;