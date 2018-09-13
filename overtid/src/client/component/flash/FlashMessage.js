import React, { Component } from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames'
 class FlashMessage extends Component {

  render() {
    const {id,type,text}=this.props.message;
console.log("Log i flashMessage component", this.props.message)
    return (
      <div className={classnames('alert',{
          'alert-success':type==='success',
          'alert-danger':type==='error'
      })}>
        {text}
        <h1>Hei hei !!</h1>
      </div>
    )
  }
  
}
FlashMessage.propTypes={
    message:propTypes.object
}

export default  FlashMessage