import React, { Component } from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames'

 class FlashMessage extends Component {
  constructor(props){
    super(props);
    this.oncCick=this.onClick.bind(this)
  }
  onClick(){
    

  }

  render() {
    const {id,type,text}=this.props.message;
console.log("Log i flashMessage component", type)
    return (
      <div className={classnames('alert',{
        'alert-success':type==='success',
        'alert-danger':type==='error'
      })}>   
       <button onClick={this.onClick}className='close'><span>&times;</span></button>        
      {text}
      </div>
    )
  }
  
}
FlashMessage.propTypes={
    message:propTypes.object,
   
    
}

export default  FlashMessage

/**<div className={classnames('alert',{
  'alert-success':type==='success',
  'alert-danger':type==='error'
})}>
{text} */