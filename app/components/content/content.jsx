import React from 'react';

export default React.createClass({
    render() {
        return(
            <div className="content">
                { this.props.children }
            </div>
        );
    }
});
