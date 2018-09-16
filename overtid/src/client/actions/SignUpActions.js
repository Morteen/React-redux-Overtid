import axios from 'axios';
export function brukerSignupRequest(brukerData){
    console.log("SignUp action log av brukerdata ",brukerData)
   
    return dispatch=>{
        fetch(`http://localhost:5000/addEnBruker?navn=${brukerData.navn}&passord=${brukerData.passord}&brukernavn=${brukerData.username}`)
.catch(err=>console.error(err))
    }
    
} 
export function finnesUser(brukernavn){
    console.log("Log fra finnessUser:",brukernavn)
    return dispatch =>{
    
    return axios.get(`http://localhost:5000/sjekkUsername/:${brukernavn}`)
  
}
}