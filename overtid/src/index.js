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

import registerServiceWorker from './registerServiceWorker';
import routes from './client/routes' 
    
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension():f=>f
    )
    /*composeWithDevTools(
        applyMiddleware(...middleware),
        applyMiddleware(thunk)
        )*/
);

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
