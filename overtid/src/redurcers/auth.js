import isEmpty from 'lodash'
import {SET_CURRENT_USER,DEL_CURRENT_USER} from '../client/actions/types';
const initialState={
    isAuthenticated:false,
    user:{}
}
export default (state= initialState, action={})=>{
    switch(action.type){
        case SET_CURRENT_USER:
        console.log("SET_CURRENT_USER action kjører i reducer",!!isEmpty(action.currUser))
        return {
            isAuthenticated:!!isEmpty(action.currUser),
            user:action.currUser
        };
        case DEL_CURRENT_USER:
        return {
            isAuthenticated:false,
            user:action.currUser
        };
        default:return state;
    }
}