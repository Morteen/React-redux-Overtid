import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){
    let errors={};
  
    if(data.identifier===''){
        errors.identifier="Dette feltet må fylles ut"
    }
    if(data.password===''){
        errors.password="Dette feltet må fylles ut"
    }
    console.log("Log fra login validering",errors)
    console.log("Log fra isEmty i validering:",isEmpty(errors))
    return {
        errors,
        isValid:isEmpty(errors)
    };
}