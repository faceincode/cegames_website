import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';

import './styles'
import './scripts'
import IndexController from './controllers/IndexController'
import IndexView from "./views/IndexView";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={IndexController} />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
