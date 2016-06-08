import React from 'react';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
    },

    render() {
        return(
            <div className="content">
                { this.props.children }
            </div>
        );
    }
});
