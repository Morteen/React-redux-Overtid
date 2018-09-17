import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {browserHistory}from 'react-router';
import validateInput from '../../../server/shared/validation/SignUp';
import TextFieldGroup from '../commen/TextFieldGroup';
import {addFlashMessages} from '../../actions/flashMessages';
import {finnesUser} from '../../actions/SignUpActions';


class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            navn:"",
            passord:"",
            passordConf:"",
            errors:{},
            isLoading:false,
            invalid:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.checkUserExist=this.checkUserExist.bind(this);
    }

    checkUserExist(e){
        const field= e.target.name;
        const val= e.target.value;
        console.log("Log fra checkUserExist i SignUpform:",val)
        if(val!==''){
            this.props.finnesUser(val).then(res=>{
                let errors = this.state.errors;
               let  invalid;
                console.log(res.data.results.length)
                if(res.data.results.length>=1){
                
                    errors[field]="Dette brukernavnet er opptatt "
                    invalid=true
                }else if(res.data.results.length===0){ 
                    errors[field]="";
                    invalid=false;
                }
                this.setState({errors,invalid})
                console.log("Errors i checkuser",errors)
            })
           
        }
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

        this.props.addFlashMessages({
                    type:'success',
                    text:'Du har når meldt deg på '
                })
            
        
            
            this.setState({isLoading:false})
            this.setState({username:"",
            navn:"",
            passord:"",
            passordConf:""})
            browserHistory.push('/');

        }
      

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
          checkUserExist={this.checkUserExist}
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
          <button disabled={this.state.isLoading||this.state.invalid} className={classnames("btn btn-primary")}>Sign in</button>
          </div>
        
      </form>
    )
  }
}

SignupForm.propTypes={
    
    brukerSignupRequest: propTypes.func,
    addFlashMessages:propTypes.func,
    finnesUser: propTypes.func
}


export default SignupForm
