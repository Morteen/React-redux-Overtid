import React, { Component } from 'react'
import {connect} from 'react-redux'
import {browserHistory}from 'react-router';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Textfieldgroup from '../commen/TextFieldGroup';
import validateInput from '../../../server/shared/validation/Login';
import {login,getUser} from '../../actions/authActions'

import setAuthorizationToken from '../../utils/setAuthorisationToken';

 

 class LoginForm extends Component {

    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            navn:"",
            identifier:"",
            password:"",
            errors:{},
            isLoading:false
        };
    }
    isValid(){
        const {errors,isValid}=validateInput(this.state);
        console.log("IsValid fra isValid funks:",isValid)
        if(!isValid){
            this.setState({errors});
            console.log("Log fra etter setState:",errors)
           
        }
        return isValid;
    }
onSubmit(e){
    e.preventDefault();
    console.log("Login knappen virker")
    
    if(this.isValid()){
        this.setState({errors:{},isLoading:true});
        this.props.login(this.state).then(res=>{
            console.log("Vi kommer hit:",res)
            if(!res.data==''){
               
                browserHistory.push('/')
                
                const token =res.data;
                this.props.getUser(token);
            
                
            }else {
                console.log("Vi kommer hit: fordi det ikke er noen brukernavn som matcher")
                this.state.errors.identifier="Brukernavn eller passord er ugyldig";
                this.state.errors.password="";
                this.setState(this.state.errors)
                this.setState({isLoading:false});
            }
            
        })
          
           
       
    }else{
        console.log("isValid funker ikke:", this.isValid())
    }
    console.log("Login knappen virker", this.isValid(),this.state.errors,this.state.password,this.state.identifier)
}
onChange(e){
    this.setState({[e.target.name]:e.target.value});
   
}


  render() {
      //for å slippe this.props bruker man dette
      //const {identifier,password,errors,isLoading}= this.state;
    return (
      <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
<Textfieldgroup
field="identifier"
label="Brukernavn"
value={this.state.identifier}
error={this.state.errors.identifier}
onChange={this.onChange }/>

<Textfieldgroup
field="password"
label="Passord"
value={this.state.password}
error={this.state.errors.password}
onChange={this.onChange }
type="password"/>
 

<div className="form-group"><button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>login</button></div>

      </form>
    )
    }
}
LoginForm.propTypes={
    
    login: propTypes.func,
    getUser:propTypes.func
    
}

export default connect(null,{login,getUser}) (LoginForm) 
