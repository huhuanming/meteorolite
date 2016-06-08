import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuth, requireAdmin } from './components/shared/authorization';
import App from './components/app';
import Home from './components/home/index';
import Devices from './components/devices/devices';
import Employees from './components/employees/employees';
import Settings from './components/settings/settings';
import NotFound from './components/others/not-found';

export default (
    <Route path='/' component={ App }>
        <IndexRoute onEnter={ requireAuth } component={ Home } />
        <Route path="home" onEnter={ requireAuth } component={ Home } />
        <Route path="devices" onEnter={ requireAuth } component={ Devices } />
        <Route path="employees" onEnter={ requireAuth } component={ Employees } />
        <Route path="settings" onEnter={ requireAuth } component={ Settings } />
        <Route path="*" component={ NotFound } />
    </Route>
);
