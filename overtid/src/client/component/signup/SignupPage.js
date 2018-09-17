import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from './SignupForm';
import {brukerSignupRequest,finnesUser} from '../../actions/SignUpActions';
import {addFlashMessages} from '../../actions/flashMessages';

class SignupPage extends Component {
 
  render() {
    const {brukerSignupRequest,addFlashMessages,finnesUser}=this.props
    return (
      <div className="row signInPage">
      <div className=" col-md-4 col-md-offset-4"> 

      <SignupForm 
      brukerSignupRequest={brukerSignupRequest}
      addFlashMessages={addFlashMessages}
      finnesUser={finnesUser}/> 

        </div>
      </div>
    )
  }
}
SignupPage.propTypes={
  brukerSignupRequest: PropTypes.func,
  addFlashMessages:PropTypes.func,
  finnesUser:PropTypes.func
}
export default connect(null,{brukerSignupRequest,addFlashMessages,finnesUser})(SignupPage)