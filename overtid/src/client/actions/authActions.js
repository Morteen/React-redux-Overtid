import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorisationToken';
export function login(data){
    
    return dispatch =>{
       
        return axios.get(`http://localhost:5000/loginTest/:${data.identifier}/:${data.password}`)
    }
}
export function getUser(token){
    console.log("jwt.decode token fra login form",jwt.decode(token));
    localStorage.setItem('jwtToken',token);
    setAuthorizationToken(token);
}