import React from 'react';
import Sidebar from './sidebar/sidebar';

export default React.createClass({
    render() {
        return (
            <div>
                <Sidebar/>
                { this.props.children }
            </div>
        );
    }
});
