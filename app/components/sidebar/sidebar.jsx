import React from 'react';
import { IndexLink, Link } from 'react-router';
import Styles from './sidebar.scss';

export default React.createClass({
    render() {
        console.log(Styles);
        return (
            <div className={Styles.root}>
                <ul>
                    <li><IndexLink to="/">首页</IndexLink></li>
                    <li><Link to="devices">设备管理</Link></li>
                    <li><Link to="settings">设置</Link></li>
                </ul>
            </div>
        );
    }
});
