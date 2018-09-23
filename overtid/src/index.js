import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer  from './redurcers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import {setCurrentUser} from '../src/client/actions/authActions';
import jwt from 'jsonwebtoken';
import registerServiceWorker from './registerServiceWorker';
import routes from './client/routes' 
import setAuthorizationToken from './client/utils/setAuthorisationToken';
    
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
    )
    
);
if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(localStorage.jwtToken));
    console.log("LocalStoreage fra index:",jwt.decode(localStorage.jwtToken))
}

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
