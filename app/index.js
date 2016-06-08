import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

import './styles/style.scss';

ReactDOM.render(
    <Router history={browserHistory} routes={Routes}/>,
    document.getElementById('app'));
