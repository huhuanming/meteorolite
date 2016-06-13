import React from 'react';
import Style from '../employees.scss';

export default React.createClass({
    propTypes: {
        memberName: React.PropTypes.string.isRequired,
        memberRole: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <div className={Style.member}>
                <img src="https://avatar.tower.im/83d0f9b23979421a96efefd268851a33" alt="member"/>
                <span className={Style.name}>{this.props.memberName}</span>
                <span className={Style.role}>{this.props.memberRole}</span>
            </div>
        );
    }
});
