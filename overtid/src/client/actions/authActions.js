import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorisationToken';
import {SET_CURRENT_USER,DEL_CURRENT_USER} from '../actions/types'
export function login(data){
    
    return dispatch =>{
       
        return axios.get(`http://localhost:5000/loginTest/:${data.identifier}/:${data.password}`);
        
    }
}
export function getUser(token){
    console.log("Funksjonen getUser kjører!")
    localStorage.setItem('jwtToken',token);
    setAuthorizationToken(token);

    var temp=jwt.decode(token);
    let  currUser={
         id:temp.results[0].id,
         navn:temp.results[0].navn,
         username:temp.results[0].brukernavn,
         password:temp.results[0].passord,
     }
     console.log ('Dette er veriden i currUser i getUser funksjonen:',currUser)
     return{
        type:SET_CURRENT_USER,
        currUser
    }
   
    
}
export function setCurrentUser(token){
    var temp=jwt.decode(token);
    let  currUser={
         id:temp.results[0].id,
         navn:temp.results[0].navn,
         username:temp.results[0].brukernavn,
         password:temp.results[0].passord,
     }
     console.log("Funksjonen setCurrentUser kjører!")
     return{
        type:SET_CURRENT_USER,
        currUser
    }
}
export function loggUt(){
    return dispatch=>{
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch( removeCurrentUser({}));
    }
}
export function removeCurrentUser(currUser){
    return{
        type:DEL_CURRENT_USER,
        currUser
    }
}