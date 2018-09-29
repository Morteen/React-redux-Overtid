import axios from 'axios'

export function createOvertid(overtid){
  
  
    return dispatch=>{
        console.log("Ser ut som create overtid  virker", overtid.brukerId)
         axios.get(`http://localhost:5000/addOvertid?bruker_id=${overtid.brukerId}&beskrivelse=${overtid.forklaring}`)
         .then(res => {
            console.log("Log fra axios promis",res);
          });
         //fetch(`http://localhost:5000/addOvertid?bruker_id=${overtid.brukerId}&beskrivelse=${overtid. forklaring}`)
    }
}