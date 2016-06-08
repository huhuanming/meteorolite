import React from 'react';
import { Link } from 'react-router';
import Style from './sidebar.scss';

export default React.createClass({
    render() {
        return <Link {...this.props} className={`${Style.navLink} ${this.props.className}`} activeClassName={Style.activeNavLink}/>
    }
});
