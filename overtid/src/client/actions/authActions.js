import axios from 'axios';
export function login(data){
  
   
    return dispatch =>{
       
           return axios.get(`http://localhost:5000/loginTest/:${data.identifier}/:${data.password}`)
    }
}