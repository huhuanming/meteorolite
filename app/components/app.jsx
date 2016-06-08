import React from 'react';
import Sidebar from './sidebar/sidebar';
import Container from './container/container';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
    },

    render() {
        return (
            <div id="app">
                <Sidebar/>
                <Container>
                    { this.props.children }
                </Container>
            </div>
        );
    }
});
