import isEmpty from 'lodash'
import {SET_CURRENT_USER} from '../client/actions/types';
const initialState={
    isAuthenticated:false,
    user:{}
}
export default (state= initialState, action={})=>{
    switch(action.type){
        case SET_CURRENT_USER:
        console.log("SET_CURRENT_USER action kjører i reducer",action.user)
        return {
            isAuthenticated:!isEmpty(action.user),
            user:action.user
        };
        default:return state;
    }
}