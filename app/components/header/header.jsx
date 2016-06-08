import React from 'react';

export default React.createClass({
    propTypes: {
        children: React.PropTypes.element.isRequired,
    },

    render() {
        return(
            <header className="header">
                { this.props.children }
            </header>
        );
    }
});
