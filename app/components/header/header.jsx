import React from 'react';

export default React.createClass({
    render() {
        return(
            <header className="header">
                { this.props.children }
            </header>
        );
    }
});
