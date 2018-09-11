export function brukerSignupRequest(brukerData){
    console.log("SignUp action log av brukerdata ",brukerData)
   
    return dispatch=>{
        fetch(`http://localhost:5000/addEnBruker?navn=${brukerData.navn}&passord=${brukerData.passord}&brukernavn=${brukerData.username}`)
.catch(err=>console.error(err))
    }
    
}