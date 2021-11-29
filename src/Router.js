/* eslint-disable react-hooks/rules-of-hooks */
import React , {useEffect, useState} from 'react'
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
     SleepData,
     TimeSetting,
     UserSetting,
     Follows
 } from "./views/dashboard"
 import Auth from './components/Auth'


const router = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LP} />     
                <Route exact path="/top" component={Top} />   
            </Switch>
            <Auth>
                <Switch>
                    
                
                    <Route exact path="/auth/login" component={Login} />
                    <Route exact path="/auth/register" component={Register} />
                    <Route exact path="/auth/user" component={UserRegister} />

                    <Route exact path="/auth/product" component={Product} />
                    <Route exact path="/dashboard/sleeps" component={SleepData} />
                    <Route exact path="/dashboard/time-setting" component={TimeSetting} />
                    <Route exact path="/dashboard/user-setting" component={UserSetting} />
                    <Route exact path="/dashboard/follows" component={Follows} />
                </Switch>
            </Auth>
            
        </Router>
    )
}

export default router
