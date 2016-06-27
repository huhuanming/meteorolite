import React from 'react';
import Member from './member';

export default React.createClass({
    propTypes: {
        memberRole: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <div>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
                <Member memberName="Tyler" memberRole={this.props.memberRole}/>
            </div>
        );
    }
});
