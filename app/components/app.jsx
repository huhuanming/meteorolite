import React from 'react';
import Sidebar from './sidebar/index'

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
