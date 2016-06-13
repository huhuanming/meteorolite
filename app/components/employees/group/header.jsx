import React from 'react';
import Style from '../employees.scss';

export default React.createClass({
    propTypes: {
        groupTitle: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <div className={Style.header}>
                <h3 className={Style.title}>{this.props.groupTitle}</h3>
            </div>
        );
    }
});
