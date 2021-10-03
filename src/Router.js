import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { 
    Top,
    LP,
    Login,
    Register,
    UserRegister,
    Product
 } from './views'

 import {
     SleepData
 } from "./views/dashboard"


const router = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LP} />
                <Route exact path="/top" component={Top} />
                
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/user" component={UserRegister} />
                <Route exact path="/auth/product" component={Product} />

                <Route exact path="/dashboard/sleeps" component={SleepData} />
            </Switch>
        </Router>
    )
}

export default router
