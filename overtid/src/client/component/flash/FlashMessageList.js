import React, { Component } from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from '../../actions/flashMessages'

 class FlashMessageList extends Component {
   
  render() {
    const  messages=this.props.messages
    
    const test=messages.map(message=>( 

     
      <FlashMessage key={message.id}message={message}deleteFlashMessage={this.props.deleteFlashMessage}/>
    ))
        console.log("Dette er const message ",messages)
    return (
      <div>
        
          
        {test}
          
      
      </div>
    )
  }
}
FlashMessageList.propTypes={
    
    messages: propTypes.array,
    deleteFlashMessage:propTypes.func
    
}

    const mapStateToProps = (state) => {
        console.log("mapStateToProps i flashMessageList ",state.flashMessages)
        return {
            messages:state.flashMessages
        };
      };

export default connect(mapStateToProps,{deleteFlashMessage}) (FlashMessageList)