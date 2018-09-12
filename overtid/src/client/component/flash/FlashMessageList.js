import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FlashMessage from './FlashMessage'

 class FlashMessageList extends Component {
   //)
   
  render() {
    const messages=this.props.messages.map(message=>{
<FlashMessage key={message.id}message={message}/>
    })
        
    return (
      <div>
        {messages}
      </div>
    )
  }
}
FlashMessageList.propTypes={
    
    messages: PropTypes.array,
    
}

    const mapStateToProps = (state) => {
        console.log("mapStateToProps i flashMessageList ",state)
        return {
            messages:state.FlashMessages
        };
      };

export default connect(mapStateToProps) (FlashMessageList)