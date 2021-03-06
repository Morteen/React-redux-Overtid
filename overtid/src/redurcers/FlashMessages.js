
import shortid from 'shortid'
import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from '../client/actions/types';
import findIndex from 'lodash/findIndex';




export default (state=[],action=[])=>{
    
   console.log("Log fra Flashreducer av action.type ",action.message,action.type)
   switch(action.type){
       case ADD_FLASH_MESSAGE:
       console.log("Log fra Flashreducer av action.text ",action.message.text)
       return[
           ...state,
           {
               id:shortid.generate(),
               type:action.message.type,
               text:action.message.text
           }
       ]
      case DELETE_FLASH_MESSAGE:
      const index= findIndex(state,{id:action.id});
      if(index>=0){
          return[
              ...state.slice(0,index),
              ...state.slice(index+1)
          ]
         
      }
      return state;
        default:
        return state;
   }
  
}