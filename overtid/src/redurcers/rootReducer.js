import {combineReducers} from 'redux';
import flashMessages from './FlashMessages'
import auth from './auth'


export default combineReducers({
flashMessages,
auth
    
})