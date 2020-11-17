import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signup from './pages/Cadastro';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';

 
const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>

                <Route path="/" component={Landing} exact/>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />

            </Switch>
        </BrowserRouter>

    );
};

export default Routes;