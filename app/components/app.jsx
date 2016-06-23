import React from 'react';
import Sidebar from './sidebar/sidebar';
import Container from './container/container';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
        location: React.PropTypes.object.isRequired
    },

    render() {
        if (/^(signin|signup)/.test(this.props.location.pathname)) {
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
});
