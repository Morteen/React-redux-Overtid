import React, { Component } from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage'

 class FlashMessageList extends Component {

   
  render() {
    const messages=this.props.messages.map(message=>{
<FlashMessage key={message.id}message={message}/>
    })
        console.log("Dette er const message ",messages)
    return (
      <div>
        {this.props.messages.map(message=>{
          console.log("log fra map funksjon i FlashmessageList ",message.id,"Text ",message.text),
          <FlashMessage key={message.id} message={message}/>       }
          )
        }
      </div>
    )
  }
}
FlashMessageList.propTypes={
    
    messages: propTypes.array,
    
}

    const mapStateToProps = (state) => {
        console.log("mapStateToProps i flashMessageList ",state.flashMessages)
        return {
            messages:state.flashMessages
        };
      };

export default connect(mapStateToProps) (FlashMessageList)