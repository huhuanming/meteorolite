import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './sidebar/sidebar';
import Container from './container/container';

const select = (state) => {
    return {
        me: state.me,
        enterprise: state.enterprise
    };
};

export default connect(select)(React.createClass({
    propTypes: {
        dispatch: React.PropTypes.func.isRequired,
        children: React.PropTypes.element.isRequired,
        location: React.PropTypes.object.isRequired
    },

    render() {
        if (/(signin|signup)/.test(this.props.location.pathname)) {
            return (
                <div id="app">
                    { this.props.children }
                </div>
            );
        }
        else {
            return (
                <div id="app">
                    <Sidebar/>
                    <Container>
                        { this.props.children }
                    </Container>
                </div>
            );
        }
    }
}));
