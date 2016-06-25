import React from 'react';
import NavIndexLink from './navIndexLink';
import NavLink from './navLink';
import Style from './sidebar.scss';

export default React.createClass({
    render() {
        return (
            <header className={Style.root}>
                <ul>
                    <li>
                        <NavIndexLink to="/" className={Style.home}>
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <span>首页</span>
                        </NavIndexLink>
                    </li>
                    {/*
                     <li>
                     <NavLink to="devices" className={Style.devices}>
                     <i className="fa fa-desktop" aria-hidden="true"></i>
                     <span>设备</span>
                     </NavLink>
                     </li>
                    */}
                    <li>
                        <NavLink to="/repository" className={Style.devices}>
                            <i className="fa fa-server" aria-hidden="true"></i>
                            <span>仓库</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employees" className={Style.employees}>
                            <i className="fa fa-group" aria-hidden="true"></i>
                            <span>员工</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={Style.settings}>
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                            <span>设置</span>
                        </NavLink>
                    </li>
                </ul>
            </header>
        );
    }
});
