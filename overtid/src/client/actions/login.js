import axios from 'axios';
export function login(data){
  
    const test=`http://localhost:5000/login/:${data.identifier}/:${data.password}`;
    //console.log("Log av axios response i login",test,axios.post(`http://localhost:5000/login/:${data.identifier}/:${data.password}`).then( 
            //(res) => { console.log("Login response",res) },
           // (error) => { console.log("Error fra login respons:",error) })
    return dispatch =>{
        return axios.get(`http://localhost:5000/login/:${data.identifier}/:${data.password}`)/*.then( 
            (res) => { console.log("Login response",res) },
            (error) => { console.log("Error fra login respons:",error) }
        );*/
    }
}