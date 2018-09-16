import React, { Component } from 'react'
import Textfieldgroup from '../commen/TextFieldGroup';

export default class LoginForm extends Component {

    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            identifier:"",
            password:"",
            errors:{},
            isLoading:false
        };
    }

onSubmit(e){
    e.preventDefault();
}
onChange(e){
    this.setState({[e.target.name]:e.target.value});
}


  render() {
      //for å slippe this.props bruker man dette
      const {identifier,password,errors,isLoading}= this.state
    return (
      <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
<Textfieldgroup
field="identifier"
label="brukernavn"
value={identifier}
error={errors.identifier}
onChange={this.onChange }/>

<Textfieldgroup
field="passord"
label="passord"
value={password}
error={errors.password}
onChange={this.onChange }
type="password"/>

<button className="btn btn-primary btn-lg" disabled={isLoading}>login</button>

      </form>
    )
    }
}
