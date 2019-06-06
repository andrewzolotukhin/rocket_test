import React from 'react';
import { Router, browserHistory, Route, Redirect } from 'react-router';
import IndexPage from './IndexPage';
import SecondPage from './SecondPage';

const RouterApp = props => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={IndexPage} />
            <Route path="/page2" component={SecondPage} />
            <Redirect from="*" to="/" />
        </Router>
    );
};

export default RouterApp;
