import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { requireAuth, requireAdmin } from './components/shared/authorization';
import App from './components/app';
import Home from './components/home/index';
import NotFound from './components/other/not-found'

export default (
    <Route path='/' component={ App }>
        <IndexRoute onEnter={ requireAuth } component={ Home } />
        <Route path="home" onEnter={ requireAuth } component={ Home } />
        <Route path="*" component={ NotFound } />
    </Route>
);
