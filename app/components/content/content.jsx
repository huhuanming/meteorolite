import React from 'react';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.node.isRequired
    },

    render() {
        return(
            <div className="content">
                { this.props.children }
            </div>
        );
    }
});
