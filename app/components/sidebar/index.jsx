import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import DesktopWindows from 'material-ui/svg-icons/hardware/desktop-windows';
import Business from 'material-ui/svg-icons/communication/business';
import Group from 'material-ui/svg-icons/social/group';
import Portrait from 'material-ui/svg-icons/image/portrait';
import Settings from 'material-ui/svg-icons/action/settings';

import { IndexLink, Link } from 'react-router';

const muiTheme = getMuiTheme();

const styles =  {
    sidebar: {
        width: 160
    }
};

export default React.createClass({
    render() {
        return (
            <div style={styles.sidebar}>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Menu>
                        <IndexLink to="/">
                            <MenuItem primaryText="首页" leftIcon={<Home />} />
                        </IndexLink>
                        <MenuItem primaryText="设备管理" leftIcon={<DesktopWindows />} />
                        <MenuItem primaryText="企业信息" leftIcon={<Business />} />
                        <MenuItem primaryText="员工管理" leftIcon={<Group />} />
                        <Link to="profile">
                            <MenuItem primaryText="个人信息" leftIcon={<Portrait />} />
                        </Link>
                        <MenuItem primaryText="系统设置" leftIcon={<Settings />} />
                    </Menu>
                </MuiThemeProvider>
            </div>
        );
    }
});
