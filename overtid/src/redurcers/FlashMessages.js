
import shortid from 'shortid'
import {ADD_FLASH_MESSAGE} from '../client/actions/types';
const initialState={
    type:"",
    text:"",
    id:''
}
export default (state=[],action=[])=>{
    
   console.log(action.message,action.type)
   switch(action.type){
       case ADD_FLASH_MESSAGE:
       console.log(action.message.text)
       return[
           ...state,
           {
               id:shortid.generate(),
               type:action.message.type,
               text:action.message.text
           }
       ]
      
        default:
        return state;
   }
  
}