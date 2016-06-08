import React from 'react';
import Sidebar from './sidebar/sidebar';
import Container from './container/container';

export default React.createClass({
    render() {
        return (
            <div>
                <Sidebar/>
                <Container>
                    { this.props.children }
                </Container>
            </div>
        );
    }
});
