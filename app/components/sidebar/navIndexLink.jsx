import React from 'react';
import { IndexLink } from 'react-router';
import Style from './sidebar.scss';

export default React.createClass({
    render() {
        return <IndexLink {...this.props} className={`${Style.navLink} ${this.props.className}`} activeClassName={Style.activeNavLink}/>
    }
});
