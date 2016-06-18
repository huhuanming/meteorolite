import React from 'react';
import Member from './member';
import QRCode from 'qrcode.react';

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
                <QRCode value="http://firmament.com/123456789" size={80}/>
            </div>
        );
    }
});
