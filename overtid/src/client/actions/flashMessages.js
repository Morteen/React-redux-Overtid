import {ADD_FLASH_MESSAGE} from './types'

export function addFlashMessages(message){
    console.log("AddflashMessags Action kjører!!")
    return {
        type:ADD_FLASH_MESSAGE,
        message
    }

}