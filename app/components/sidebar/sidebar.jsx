import React from 'react';
import NavIndexLink from './navIndexLink';
import NavLink from './navLink';
import Style from './sidebar.scss';

export default React.createClass({
    render() {
        return (
            <div className={Style.root}>
                <ul>
                    <li>
                        <NavIndexLink to="/">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <span>首页</span>
                        </NavIndexLink>
                    </li>
                    <li>
                        <NavLink to="devices">
                            <i className="fa fa-desktop" aria-hidden="true"></i>
                            <span>设备</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="settings">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            <span>设置</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
});
