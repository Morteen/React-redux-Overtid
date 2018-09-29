import React, { Component } from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import TextFieldGroup from '../commen/TextFieldGroup'
import TextAreaGroup from '../commen/TextFieldGroup'
import {createOvertid} from '../../actions/overtidActions'

class OvertidForm extends Component {
    constructor(props){
        super(props);
        this.state={
           dato:'',
            tid:'',
            forklaring:'',
            errors:{},
            isLoading:false,
            brukerId:''
           
        }


        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
       
    }
    onSubmit(e){
e.preventDefault();

this.state.brukerId=this.props.userId;
this.props.createOvertid(this.state)

    }
    
  render() {
//For å slippe å bruke this.state
const{dato,errors,isLoading,tid,forklaring,brukerId}= this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <h3>Legg inn overtid</h3>
        <TextFieldGroup 
        field='dato'
        label='Dato'
        value={dato}
        error={errors.dato}
        onChange={this.onChange }
        />
        <TextFieldGroup 
        field="tid"
        label='Antall timer'
        value={tid}
        onChange={this.onChange}
        error={errors.tid}
        />

 <div className="form-group">
  <label >Forklaring:</label>
  <textarea 
  className="form-control" 
  rows="5" 
  name='forklaring'
  value={forklaring}
  onChange={this.onChange}
  error={errors.tid}
  />
 
</div> 

        
        <button className="btn btn-primary">Legg inn</button>
        </form>
      </div>
    )
  }
}
OvertidForm.propTypes={
    createOvertid:propTypes.func.isRequired 
    
}
function mapStateToProps(state){
    return{
     
      
        userId:state.auth.user.id
    }
  
  }

export default connect(mapStateToProps,{createOvertid}) (OvertidForm)