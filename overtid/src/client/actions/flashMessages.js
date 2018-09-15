import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from './types'

export function addFlashMessages(message){
    console.log("AddflashMessags Action kjører!!")
    return {
        type:ADD_FLASH_MESSAGE,
        message
    }

}
export function deleteFlashMessage(id){
    console.log("DeleteflashMessags Action kjører!!")
    return {
        type:DELETE_FLASH_MESSAGE,
      id
    }

}