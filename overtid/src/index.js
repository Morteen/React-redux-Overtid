import React from 'react';
import ReactDOM from 'react-dom';
import {Router,browserHistory} from 'react-router';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import routes from './client/routes' 

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
