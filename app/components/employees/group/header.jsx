import React from 'react';
import Style from '../employees.scss';
import { Link } from 'react-router';

export default React.createClass({
    propTypes: {
        groupTitle: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <div className={Style.header}>
                <Link to="/employees/addition" className="pull-right">添加</Link>
                <h3 className={Style.title}>{this.props.groupTitle}</h3>
            </div>
        );
    }
});
