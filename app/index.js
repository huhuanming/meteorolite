// React
import React from 'react';
import ReactDOM from 'react-dom';

// Reducers
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// React Router
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

// Style
import './styles/style.scss';

const loggerMiddleware = createLogger();
let store = createStore(
    Reducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById('meteorolite'));
