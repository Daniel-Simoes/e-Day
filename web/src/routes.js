import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import NewRegister from './pages/NewRegister';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/profile" component={Profile} />  
                <Route path="/newRegister" component={NewRegister} />
            </Switch>
        </BrowserRouter>
    );
}