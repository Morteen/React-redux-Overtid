import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validation/SignUp';
import TextFieldGroup from '../commen/TextFieldGroup';
import {browserHistory}from 'react-router';


class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            navn:"",
            passord:"",
            passordConf:"",
            errors:{},
            isLoading:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    isValid(){
        const {errors,isValid}=validateInput(this.state);
        if(!isValid){
            this.setState({errors})
        }
        return isValid
    }
    onSubmit(e){
        this.setState({errors:{}})
        e.preventDefault();
        if(this.isValid()){ 
        this.setState({errors:{},isLoading:true})
        console.log(this.state);
        this.props.brukerSignupRequest(this.state)
            
            this.setState({isLoading:false})
            this.setState({username:"",
            navn:"",
            passord:"",
            passordConf:""})

        }
        browserHistory.push('/');

    }
  render() {
      const {errors}=this.state;
    return (
      <form onSubmit={this.onSubmit}>
          <h1>Meld deg inn hos overtidshaiene</h1>

 <TextFieldGroup
          error={errors.navn}
          label='Navn'
          onChange={this.onChange}
          value={this.state.navn}
          field='navn'
          />
 <TextFieldGroup
          error={errors.username}
          label='Brukernavn'
          onChange={this.onChange}
          value={this.state.username}
          field='username'
          />
<TextFieldGroup
          error={errors.passord}
          label='Passord'
          onChange={this.onChange}
          value={this.state.passord}
          field='passord'
          />
<TextFieldGroup
          error={errors.passordConf}
          label='Bekreft passord'
          onChange={this.onChange}
          value={this.state.passordConf}
          field='passordConf'
          />


          <div className="form-group">
          <button disabled={this.state.isLoading} className={classnames("btn btn-primary")}>Sign in</button>
          </div>
        
      </form>
    )
  }
}

SignupForm.propTypes={
    
    brukerSignupRequest: PropTypes.func
}


export default SignupForm
