import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from './SignupForm';
import {brukerSignupRequest} from '../../actions/SignUpActions';
import {addFlashMessages} from '../../actions/flashMessages';

class SignupPage extends Component {
 
  render() {
    const {brukerSignupRequest,addFlashMessages}=this.props
    return (
      <div className="row">
      <div className=" col-md-4 col-md-offset-4"> 

      <SignupForm brukerSignupRequest={brukerSignupRequest}addFlashMessages={addFlashMessages}/> 

        </div>
      </div>
    )
  }
}
SignupPage.propTypes={
  brukerSignupRequest: PropTypes.func,
  addFlashMessages:PropTypes.func
}
export default connect(null,{brukerSignupRequest,addFlashMessages})(SignupPage)