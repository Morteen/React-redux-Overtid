import React, { Component } from 'react'
import axios from 'axios';

export default class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            navn:"",
            passord:"",
            passordConf:""
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/addEnBruker?navn=kdkkd&passord=3456&brukernavn=234')

    }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <h1>Meld deg inn hos overtids haiene</h1>

          <div className="form-group">
          <label className="control-label">Navn</label>
          <input 
          value={this.state.unavn}
          onChange={this.onChange}
          type="text" 
          name="navn"
          className="form-control"
          />
          </div>
          <div className="form-group">
          <label className="control-label">Brukernavn</label>
          <input 
          value={this.state.username}
          onChange={this.onChange}
          type="text" 
          name="username"
          className="form-control"
          />
          </div>
          <div className="form-group">
          <label className="control-label">Passord</label>
          <input 
          value={this.state.passord}
          onChange={this.onChange}
          type="text" 
          name="passord"
          className="form-control"
          />
          </div>
          <div className="form-group">
          <label className="control-label">Bekreft passord</label>
          <input 
          value={this.state.passordConf}
          onChange={this.onChange}
          type="text" 
          name="passordConf"
          className="form-control"
          />
          </div>

          <div className="form-group">
          <button className="btn btn-primary">Sign in</button>
          </div>
        
      </form>
    )
  }
}