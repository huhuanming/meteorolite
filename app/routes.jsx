import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {requireAuth} from './components/shared/authorization';
import App from './components/app';
import SignUp from './components/sign/signup';
import SignIn from  './components/sign/signin';
import Home from './components/home/index';
import Devices from './components/devices/devices';
import Repository from './components/repository/repository';
import Template from './components/template/template';
import Employees from './components/employees/employees';
import Addition from './components/employees/addition';
import Qrcode from './components/qrcode/qrcode';
import Settings from './components/settings/settings';
import NotFound from './components/others/not-found';

export default (
    <Route path='/' component={ App }>
        <IndexRoute onEnter={ requireAuth } component={ Home }/>
        <Route path="signup" onEnter={ requireAuth } component={ SignUp }/>
        <Route path="signin" onEnter={ requireAuth } component={ SignIn }/>
        <Route path="devices" onEnter={ requireAuth } component={ Devices }/>
        <Route path="repository" onEnter={ requireAuth } component={ Repository }/>
        <Route path="template" onEnter={ requireAuth } component={ Template }/>
        <Route path="employees" onEnter={ requireAuth } component={ Employees }>
            <Route path="addition" onEnter={ requireAuth } component={ Addition }/>
        </Route>
        <Route path="qrcode" onEnter={ requireAuth } component={ Qrcode }/>
        <Route path="settings" onEnter={ requireAuth } component={ Settings }/>
        <Route path="*" component={ NotFound }/>
    </Route>
);
