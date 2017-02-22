import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../actions/counter-actions';
import { bindActionCreators } from 'redux';

class IncrementDecrementComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.props.actions.increment}>Increment</button>
                <button onClick={this.props.actions.decrement}>Decrement</button>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        counter: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementDecrementComponent);