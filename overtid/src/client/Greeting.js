import React, { Component } from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
 class Greeting extends Component {
  // 
  constructor(props){
    super(props);
   
  }
  
  render() {
    const medToken=( <div> 
    <h1> Velkommen </h1>
    <h3>{this.props.navn}</h3>
    </div> 
    );
    const utenToken=( <div id="velkom">
    <h1>Sharkpool</h1>
    <p>Et samlingspunkt for overtidshaier</p>
    </div>);
    const {isAuthenticated}=this.props.auth;
    
     
   
    return (
      <div className="jumbotron">
          {isAuthenticated ? medToken : utenToken}
      </div>
    )
  }
}
Greeting.propTypes={
  auth:propTypes.object,
  
}
function mapStateToProps(state){
  return{
    auth:state.auth,
    navn:state.auth.user.navn
  }

}
export default connect (mapStateToProps)(Greeting)
