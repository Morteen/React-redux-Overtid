import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from '../App';
import Greeting from './Greeting';
import SignupPage from './component/signup/SignupPage';
export default(
    <Route path="/" component={App}> 
        <IndexRoute component={Greeting}/>
        <Route path="signup" component={SignupPage}/>>
    </Route>
)