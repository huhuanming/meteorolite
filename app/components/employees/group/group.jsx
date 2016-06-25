import React from 'react';
import Style from '../employees.scss';
import Header from './header';
import Members from './members';

export default React.createClass({
    propTypes: {
        groupTitle: React.PropTypes.string.isRequired
    },

    render() {
        return(
            <div className={`content ${Style.panel}`}>
                <Header groupTitle={this.props.groupTitle}/>
                <Members memberRole={this.props.groupTitle}/>
            </div>
        );
    }
});
