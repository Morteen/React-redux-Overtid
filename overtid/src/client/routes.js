import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from '../App';
import Greeting from './Greeting';
import SignupPage from './component/signup/SignupPage';
import LoginPage from './component/login/LoginPage';
import OvertidPage from '../client/component/overtid/OvertidPage'
export default(
    <Route path="/" component={App}> 
        <IndexRoute component={Greeting}/>
        <Route path="signup" component={SignupPage}/>
        <Route path="Login" component={LoginPage}/>
        <Route path="Overtid" component={OvertidPage}/>
    </Route>
)