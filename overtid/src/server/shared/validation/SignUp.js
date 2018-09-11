import validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default  function validateInput(data){
    let errors={};
    let isValid;
    
console.log("Data fra validator funksjon",data)
    if(data.navn===""){
        errors.navn="Dette feltet må fylles ut"
    }
    if(data.username===""){
        errors.username="Dette feltet må fylles ut"
    }
    if(data.passord===""){
        errors.passord="Dette feltet må fylles ut"
    }
    if(data.passordConf===""){
        errors.passordConf="Dette feltet må fylles ut"
    }
    if(!data.passord===data.passordConf){
        errors.passordConf="Passordene må være like"
    }
    return {
        errors,
        isValid:isEmpty(errors)
    }
}